"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// No need to define individual types
// interface Product {
//     name: string,
//     price: number
// }
// interface ProductDetailedName {
//     name: DetailedName,
//     price: number
// }
// interface ProductDetailedTax {
//     name: string,
//     price: DetailedPrice
// }
// interface ProductDetailedNamePrice {
//     name: DetailedName,
//     price: DetailedPrice
// }
var pen = {
    name: 'Reynolds Ball Point Pen',
    price: 10
};
var pencil = {
    name: {
        manufacturer: 'Camlin',
        productName: 'Dark Pencil'
    },
    price: 5
};
// EXERCISE: Please assign the types for these 2 using he generic interface - Product
var eraser = {
    name: 'Camlin',
    price: {
        basePrice: 8,
        tax: 2
    }
};
var sharpener = {
    name: {
        manufacturer: 'Natraj',
        productName: 'Super Sharpener'
    },
    price: {
        basePrice: 12,
        tax: 3
    }
};
