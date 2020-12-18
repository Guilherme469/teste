/*
.forEach = Itera e retorna os mesmos elementos 

const arr = [1,2,3,4,5];

arr.forEach((value, index) => {
    console.log('${index}: ${value}');
});



MAP = Retorna um novo array, de mesmo tamanho, iterando cada item de um array

const arr = [1,2,3,4,5]

arr.map(value => value * 2);

FLAT = Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especifica(depth)

const arr = [1,2, [3,4]];
arr.flat();

flatMap = Retorna um novo array assim como a funcao map e executa um flat de profundidade 1 

const arr = [1,2,3,4];

arr.flatMap(value => [value * 2]);

arr.flatMap(value = > [[value * 2]])

keys = Retorna um  Array Iterator que contem as chaves para cada elemento do array 

const arr = [1,2,3,4];

const arrIterator = arr.keys();      >>> ou arr.values();

arrIterator.next();

arrIterator.next();

arrIterator.next();

arrIterator.next();

ENTRIES = Retorna um array iterator que contem os pares chave/valor para cada elemento do array 

const arr = [1,2,3,4];

const arrIterator = arr.entries();      

arrIterator.next();

arrIterator.next();

arrIterator.next();

arrIterator.next();

FIND = Retorna o primeiro item de um array que satisfaz a condicao 

const arr = [1,2,3,4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);

FindIndex = Retorna o indice do primeiro item de um array que satisfaz a condicao

const arr = [1,2,3,4];

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstIndexGreaterThanTwo)

filter = Retorna um novo array com todos os elementos que satisfazem a condicao

const arr = [1,2,3,4];

const allvaluesgreaterthantwo = arr.filter(value => value > 2);

console.log(allvaluesgreaterthantwo);

IndexOf = Retorna o primeiro indice  em que um elemento pode ser encontrado no array

const arr = [1,3,3,4,3];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem);

lastIndexOf = Retorna o ultimo indice em que um elemento pode ser encontrado em um array 

const arr = [1,3,3,4,3];

const lastIndexOfItem = arr.lastIndexOf(3);

console.log(lastIndexOfItem);

Includes = Retorna um booleano verificando se determinado elemento existe no array

const arr = [1,3,3,4,3];

const hasItemOne = arr.includes(1);

const hasItemTwo = arr.includes(2);

some = Retorna um booleano verificando se pelo menos um item de um array satisfaz a condicao 

const arr = [1,3,3,4,3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);

every = Retorna um booleano verificando se todos os itens de um array satisfazem a condicao 

const arr = [1,3,3,4,3];

const allEveryNumbers = arr.every(value => value % 2 === 0);

sort =  Ordena os elementos de um array de acordo com a condicao

const arr = [1,2,4,5,8];

arr.sort();

Reverse = Inverte os elementos de um array

const arr = [1,3,4,5]

arr.reverse();
*/
