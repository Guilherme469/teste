function init(){
    const exemplo = "essa vai ser a variavel";

    return function(){

        console.log("1 - o valor da variavel e: ${exemplo}.");

        return function(){
            console.log("2 - o valor da variavel e: ${exemplo}.");


            return function(){
                console.log("3 - o valor da variavel e: ${exemplo}.");
            }
        }
    }
}

const initFn1 = init();

const initFn2 = init();

const initFn3 = init();

initFn3();

