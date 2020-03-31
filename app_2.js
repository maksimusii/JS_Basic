'use strict';

for (let i = 0; i < 11; i++){
    if (i == 0) {
        console.log(`${i} - это ноль`);
        continue;
    }
    //Побитовое сравнение числа
    if (i & 1) {
        console.log(`${i} - нечетное число`);

    } else {
        console.log(`${i} - четное число`);
    }
}
