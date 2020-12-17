"PRIVADO"

'use strict';

function Person(initialName){
    let name = initialName;

    this.getName = function(){
        return name;
    }

    this.setName = function(newName){
        name = newName;
    }
}

const p = new Person('Guilherme');


"PUBLICO"

'use strict';

console.log(p);

p.getName();

p.name;

p.setName('Thiago');
p.getName();
