
'use strict';
const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];

products.forEach(product =>
    console.log("Продукт с id " + product.id + " со скидкой 15% стоит " + (product.price * 0.85))
)    