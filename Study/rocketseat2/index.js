/* CRIA A CONST, MANDA PESQUISAR DENTRO DO DOCUMENTO, O SELETOR QUE E A CLASSE MODAL-OVERLAY LA DO HTML/CSS E ACRESCENTAR NESSA CLASSE A PALAVRA ACTIVE*/

const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

/* CRIA A CONST, AI ESSA DAQUI  TA ADICIONANDO ARRAYS COM A DESCRICAO DOS ITENS*/
const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  { id: 2, description: "Salario", amount: 500000, date: "23/01/2021" },
  { id: 3, description: "Agua", amount: -50000, date: "23/01/2021" },
];

//ESSA E RESPONSAVEL POR FAZER OS CALCULOS DAS TRANSACOES//
const Transaction = {
  all: transactions,
  add(transaction) {
    Transaction.all.push(transaction);
    App.reload();
  },
  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income;
  },
  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

/* AQUI TA RECRIANDO ESSA PARTE LA DO HTML PRA VARIAR AS INFOS*/
const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),
  addTransaction(transaction, index) {
    const tr = document.createElement("tr"); /*CRIA O 'TR' DENTRO DESSA DOM*/
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    console.log(tr.innerHTML);
    /*ESSE APPEND E O ELEMENTO CRIADO NO JS, NESSE CASO E ESSE 'TR'*/
    DOM.transactionsContainer.appendChild(tr);
  },

  /*ESSE AQUI TA MODIFICANDO A PARTE DE TRANSACOES QUE ERA FIXA PRA VARIAVEL*/
  innerHTMLTransaction(transaction) {
    /* TRADUCAO DESSE CODIGO: se o amount for maior que 0, coloque "income", se nao coloque "expense"*/
    const CSSclass = transaction.amount > 0 ? "income" : "expense";
    const amount = Utils.formatCurrency(transaction.amount);
    const html = `
        <td class="description">${transaction.description}</td> 
        <td class=${CSSclass}>${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="./assets/minus.svg" alt="" />
        </td>
      `;

    return html;
  },

  // ESSA PARTE E A DE ATUALIZAR A PARTE DE 'BALANCE' COM A PARTE DA CONST UTILS  //
  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },
  clearTransactions() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

// PARTE DE FORMATACAO DOS NUMEROS //
const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";
    //  \/ NESSE CODIGO AQUI, A PARTE DENTRO DESSE REPLACE FAZ TIRAR QUALQUER CARACTER QUE NAO SEJA NUMERO //
    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    // \/ ESSE E DE LOCALIZACAO, AJUSTES AQUI PRO BR//
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return signal + value;
  },
};

const App = {
  init() {
    Transaction.all.forEach(DOM.addTransaction);

    DOM.updateBalance();
  },
  reload() {
    DOM.clearTransactions();
    App.init();
  },
};

App.init(); // INICIA //
