
interface DetailedName {
    manufacturer:string,
    productName:string
}

interface DetailedPrice {
    basePrice:number,
    tax:number
}

interface Product<NameType=string,PriceType=number>{
    name:NameType,
    price:PriceType
}


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

const pen:Product = {
    name: 'Reynolds Ball Point Pen',
    price:10
}

const pencil : Product<DetailedName> = {
    name: {
        manufacturer:'Camlin',
        productName:'Dark Pencil'
    },
    price:5
}

// EXERCISE: Please assign the types for these 2 using he generic interface - Product
const eraser : Product<string,DetailedPrice>={
    name: 'Camlin',
    price: {
        basePrice: 8,
        tax: 2
    }
};

const sharpener :Product<DetailedName,DetailedPrice>= {
    name: {
        manufacturer: 'Natraj',
        productName: 'Super Sharpener'
    },
    price: {
        basePrice: 12,
        tax: 3
    }
};

export{}









