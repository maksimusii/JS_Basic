'use strict';
const products = [
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ]
    },
    {
    id: 5,
    price: 499,
    photos: []
    },
    {
    id: 10,
    price: 26,
    photos: [
    "3.jpg"
    ]
    },
    {
    id: 8,
    price: 78,
    },
    ];
let testf = [];

function Cretlengh(image) {
    if (image.photos !== undefined) {
        return true; 
    }
}

let Filter_result = products.filter(Cretlengh); // Отфильтровыем объекты с свойством photos
Filter_result = Filter_result.filter(product => product.photos.length > 0) // Отфильтровываем объекты с пустым свойством photos
console.log(Filter_result);
//сортировка по цене от низкой к высокой
products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return - 1;
    }
})
console.log(products);