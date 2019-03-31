"use strict";

////////////////////////////////////////////
/// 1
///////////////////////////////////////////
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 В данном случае ++ это преинкремент, т.е. значение переменной увеличивается перед ее использованием
d = b++; alert(d);           // 1 В данном случае - постинкремент и, т.к. b=1 изначально, то в d записыватся 1
c = (2+ ++a); alert(c);      // 5 Опять преинкремент для a=2 (в первом выражении)  -> 2 + 1 + 2 = 5 (а становится равным 3)
d = (2+ b++); alert(d);      // 4 Опять постинкремент для b=2 (во втором выражеии) -> 2 + 2 (b становится равным 3)
alert(a);                    // 3 описал выше
alert(b);                    // 3 описал выше

////////////////////////////////////////////
/// 2
///////////////////////////////////////////
var a = 2;
var x = 1 + (a *= 2);        // в данном случае (a *= 2) эквивалентно 2 * a -> 1 + 2 * a = 1 + 2 * 2 = 5
console.log(a);
console.log(x);

////////////////////////////////////////////
/// 3
///////////////////////////////////////////
var num1 = Number(prompt('Введите первое число: ', ''));
var num2 = Number(prompt('Введите второе число: ', ''));

var diff = num1 - num2
var mult = num1 * num2
var sum  = num1 + num2

if ((num1 >= 0) & (num2 >= 0)) {
   alert('Считаем разность: ' + diff);
}
else if ((num1 < 0) & (num2 < 0)){
   alert('Считаем произведение: ' + mult);
}
else if ((num1 >= 0) & (num2 < 0)  | (num1 < 0) & (num2 >= 0)){
   alert('Считаем сумму: ' + sum);
}

////////////////////////////////////////////
/// 4
///////////////////////////////////////////
function printVar(a){
    console.log(a++);
    if (a <= 15)
        printVar(a);
}

var a = Number(prompt('Введите число a: ', ''));
printVar(a);

////////////////////////////////////////////
/// 5, 6
///////////////////////////////////////////
function sumF(a1, a2) {
    return a1 + a2
}

function diffF(a1, a2) {
    return a1 - a2
}

function multF(a1, a2) {
    return a1 * a2
}

function divF(a1, a2) {
    if (a2 == 0){
        return "wrong type"
    } else {
        return a1 / a2
    }
}
function mathOp(arg1, arg2, op){
    switch (op){
        case 'sum':
            alert('сумма: ' + sumF(arg1, arg2));
        break;
        case 'diff':
            alert('разность: ' + diffF(arg1, arg2));
        break;
        case 'mult':
            alert('произведение: ' + multF(arg1, arg2));
        break;
        case 'div':
            alert('деление: ' + divF(arg1, arg2));
        break;
        default:
            alert('Не верная опереция');
        break;
    }
}
alert('Проверка операций')
var num1 = Number(prompt('Введите первое число: ', ''));
var num2 = Number(prompt('Введите второе число: ', ''));
mathOp(num1, num2, 'sum');
mathOp(num1, num2, 'diff');
mathOp(num1, num2, 'mult');
mathOp(num1, num2, 'div');
mathOp(num1, num2, 'ssumu');

////////////////////////////////////////////
/// 7
///////////////////////////////////////////
alert(null > 0);
alert(null < 0);
alert(null == 0);
// Во всех случаях выдаст False
// null обозначает ничто, ничего. В то время как 0 - конкретное значение переменной.

////////////////////////////////////////////
/// 8
///////////////////////////////////////////
function power(numVal, curVal, powVal){
    if (powVal-- >= 1){
        curVal *= numVal;
        console.log(curVal)
        power(numVal, curVal, powVal);
    }
    return curVal;
}
alert('Проверка возведения в степень')
var numVal = Number(prompt('Введите число: ', ''));
var powVal = Number(prompt('Введите степень: ', ''));
var curVal = 1;
power(numVal, curVal, powVal);
