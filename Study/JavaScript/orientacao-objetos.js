/*
'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
*/

/*
POSSO FAZER ASSIM TB

function Animal(){}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
*/ 

"AGORA USANDO O CLASS"

'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}
class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);

console.log(pug);
