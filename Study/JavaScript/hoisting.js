function fn(){
    log("Hoisting de funcao")

    function log(value){
        console.log(value);
    }
}

fn();

/* No hoisting ele le assim: 

function fn(){
    function log(value){
        console.log(value);
    
    }
    log("hoisting de funcao");
}
*/
