"use strict";

////////////////////////////////////////////
/// 1
///////////////////////////////////////////
// var iNum   = +prompt('Введите число:', '');

// var numObj = {
//     hundr:  0,     // сотни
//     dozen:  0,     // десятки
//     units:  0,     // единцы
//     convert(iNum) {
//         if (iNum >= 1000) {
//             console.log("Число слишком большое");
//         } else {
//             var str = "" + iNum;
//             var arr = str.split('');
//             console.log(str);
//             // теперь в зависимости от количества знаков
//             if (iNum < 10) {
//                 this.units = iNum;
//             } else if (iNum < 100) {
//                 this.dozen = arr[0];
//                 this.units = arr[1];
//             } else {
//                 this.hundr = arr[0];
//                 this.dozen = arr[1];
//                 this.units = arr[2];
//             }
//         }
//     },
//     reportNums() {
//         console.log("Converted " + iNum + " to:");
//         console.log("\tHundreeds " + this.hundr);
//         console.log("\tDozens " + this.dozen);
//         console.log("\tUnits " + this.units);
//     }
// };

// numObj.convert(iNum);
// numObj.reportNums();


////////////////////////////////////////////
/// 2
////////////////////////////////////////////
var basket = {
    content: {
        0: {
            prodArt   : 0,              // артикул
            prodName  : "ESP Horizon",
            prodObj   : null,           // ссылка на объект продукта
            prodCount : 1,
            prodPrice : 100000,
            prodTotal : 0               // вычилим во время подсчета общей суммы
        },
        1: {
            prodArt   : 1,              // артикул
            prodName  : "ESP M2",
            prodObj   : null,           // ссылка на объект продукта
            prodCount : 2,
            prodPrice : 115000,
            prodTotal : 0               // вычилим во время подсчета общей суммы
        },
        2: {
            prodArt   : 2,              // артикул
            prodName  : "ESP Arrow",
            prodObj   : null,           // ссылка на объект продукта
            prodCount : 3,
            prodPrice : 93000,
            prodTotal : 0               // вычилим во время подсчета общей суммы
        },
    },
    sumTotal: 0,                        // общая стоимость корзины
    countCurrentProd(prodId) {
        this.content[prodId].prodTotal = this.content[prodId].prodCount * this.content[prodId].prodPrice;
    },
    countBasketPrice() {
        var sumTotal = 0;
        for (var prodId in basket.content){
            // console.log(prodId);
            this.countCurrentProd(prodId);
            console.log(this.content[prodId].prodTotal);
            this.sumTotal += this.content[prodId].prodTotal;
        }
        console.log('Total price: ' + this.sumTotal);
    }
};

console.log('Counting basket:');
basket.countBasketPrice();
console.log('Finished');
console.log('==============================================')

////////////////////////////////////////////
/// 3
////////////////////////////////////////////
//
// Т.к. выбран магазин электрогитар,
// сущность продукт должна содержать следующие поля:
// 1 - артикул, уникальное поле
// 2 - наименование
// 3 - список ссылок на фотографии
// 4 - количество струн
// 5 - материал корпуса
// 6 - количество звукоснимателей
// ....
// методы пока могу предположить только те, что были использованы в корзине