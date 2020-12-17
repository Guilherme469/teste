/*
const array = [0,1,2,3,4,5];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log('O numero ' + item + ' e par')
    }else{
        console.log('O Numero ' + item + ' e impar')
    }
});
*/

const fruit = 'banana';

switch (fruit) {
    case 'banana':
    console.log('O preco da bana e 3RS');
    break;
case 'mamao':
console.log('O mamao custa 3RS');
break;
case 'uva':
    console.log('A uva custa 5RS');
    break;
    default:
        console.log('o produto nao existe');
        break;
}