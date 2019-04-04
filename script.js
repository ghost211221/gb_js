"use strict";

////////////////////////////////////////////
/// 1
///////////////////////////////////////////
var num       = 1;
var simpleArr = [];
var complex   = 0;
console.log('Simple numbers:')
while (num <= 100) {
    var i     = 2;
    complex   = 0;
    while (i < num) {
        if (num % i == 0) {
            complex = 1;
            // console.log(num, i, complex);
            break;

        }
        i++;
    }
    if (complex == 0) {
        simpleArr.push(num);
        console.log('\t' + num);
    }
    num++;
}
console.log('Finished')
console.log('==============================================')

////////////////////////////////////////////
/// 2,3 
/// корзину удобней реализовать как словарь
/// basket[id] = {
///     'prodName'  : name,     - название товара
///     'prodCount' : count,    - количество
///     'prodPrice' : price,    - цена за единицу
///     'prodTotal' : total     - результирущая цена = count * price
/// }
///////////////////////////////////////////
var basket = {};
basket['prod1'] = {
    'prodName'  : "ESP Horizon",
    'prodCount' : 1,
    'prodPrice' : 100000,
    'prodTotal' : 0             // вычилим во время подсчета общей суммы
};
basket['prod2'] = {
    'prodName'  : "ESP M2",
    'prodCount' : 2,
    'prodPrice' : 115000,
    'prodTotal' : 0             // вычилим во время подсчета общей суммы
};
basket['prod3'] = {
    'prodName'  : "ESP Arrow",
    'prodCount' : 3,
    'prodPrice' : 93000,
    'prodTotal' : 0             // вычилим во время подсчета общей суммы
};

function countCurrentProd(prodId) {
    basket[prodId]['prodTotal'] = basket[prodId]['prodCount'] * basket[prodId]['prodPrice'];
}

function countBasketPrice() {
    var sumTotal = 0;
    for (var prodId in basket){
        countCurrentProd(prodId);
        sumTotal += basket[prodId]['prodTotal'];
    }
    console.log('Total price: ' + sumTotal);
}

console.log('Counting basket:');
countBasketPrice();
console.log('Finished');
console.log('==============================================')
////////////////////////////////////////////
/// 4
///////////////////////////////////////////
console.log('Use for to print 0-9');
for (var i = 0; i < 10; console.log(i++)) {}
console.log('Finished');
console.log('==============================================')
////////////////////////////////////////////
/// 5
////////////////////////////////////////////
for (var i = 0; i < 21; i++) {
    var lineArr = [];
    for (var j = 0; j < 21; j++) {
        if (j < i) {
            lineArr.push('x');
        } else {
            
        }
    }
    console.log(lineArr.join(''));
}