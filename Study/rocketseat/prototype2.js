// Tem essa opcao //
const modalOverlay = () => {
    const modal = document.getElementById('modal')
    modal.classList.add('active')
}
const cancel = () => {
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
}

// Ou essa daqui. Ambas vao dar o mesmo resultado //
const modal = {
    open() {     
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close() {
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const Transaction = {
    all: [ 
        {
        description:'Luz',
        amount: -50000,
        date: '23/01/2021'
    },  
    {
        description:'Criacao de Website',
        amount: 500000,
        date: '24/01/2021'
    },
    {
        description:'Aluguel',
        amount: -150000,
        date: '25/01/2021'
    },
    ] ,

    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },

    incomes() {
        let income = 0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        return income;
    },
    expenses () {
        let expense = 0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount < 0) {
                expense += transaction.amount;
            }
        })
        return expense;
    },
    total () {
        return Transaction.incomes() + Transaction.expenses();
    
    }
}

const DOM = { 

    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        tr.dataset.index = index
        
        DOM.transactionsContainer.appendChild(tr)
    },
        innerHTMLTransaction(transaction, index){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transacao">
        </td>
        `

        return html
    },

        updateBalance() {
            document.getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
            document.getElementById('expensiveDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())
            document.getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())
        },

        
        clearTransactions() {
            DOM.transactionsContainer.innerHTML = ""
        }
}

const Utils = {
    formatAmount(value) {
        value = Number(value) * 100
        return value
    },

    formatDate(date){
        const splittedDate = date.split("-")
        return `${splittedDate[1]}/${splittedDate[2]}/${splittedDate[0]}`
    },
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100
        
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues(){
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },
    formatValues (){
        let { description, amount, date } = Form.getValues()

        amount = Utils.formatAmount(amount)
        
        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }

    },
    validateFields() {
        const { description, amount, date} = Form.getValues()
        if(
        
        description.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === "" ) {
            throw new Error("Por favor, preencha todos os campos")
        }

},

    saveTransaction(transaction){
        Transaction.add(transaction)

    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {

            Form.validateFields()

            const transaction = Form.formatValues()

            Form.saveTransaction(transaction)

            Form.clearFields()

            modal.close()

            App.reload()

        } catch (error) {
            alert(error.message)
        }

    }
} 

const App = {
    init() {

        Transaction.all.forEach(DOM.addTransaction)

        DOM.updateBalance()

    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()

Transaction.remove()