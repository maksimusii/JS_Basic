'use strict';
let money = prompt('Сколько денег вы хотели бы зачислить');
let ended = money.charAt(String(money).length - 1); // возвращает последнию цифру в числе
let curency; // наименование валюты
switch (true){
    case ended == "1":
        curency = "рубль";
        break;
    case ended == "2" || ended == "3" || ended == "4":
        curency = "рубля";
        break;
    default:
        curency = "рублей";
}
alert("Ваша сумма в " + money + " " + curency + " успешно зачислена.");