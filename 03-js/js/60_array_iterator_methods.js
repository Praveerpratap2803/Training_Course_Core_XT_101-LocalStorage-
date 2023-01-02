// Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map)

const phones = [
    {
        name: "Samsung Galaxy S10+ Plus",
        price: 620,
        type: "refurbished",
        manufacturer: "Samsung",
    },
    {
        name: "Apple iPhone 7 Plus",
        price: 450,
        type: "refurbished",
        manufacturer: "Apple",
    },
    {
        name: "One Plus 6",
        price: 430,
        type: "new",
        manufacturer: "OnePlus"
    },
    {
        name: "Apple iPhone Xs",
        price: 910,
        type: "new",
        manufacturer: "Apple"
    },
    {
        name: "One Plus 7",
        price: 430,
        type: "refurbished",
        manufacturer: "OnePlus",
    },
    {
        name: "Apple iPhone 8 Plus",
        price: 610,
        type: "new",
        manufacturer: "Apple",
    },
];


// • Create a new array with the name of each phone. Thus the new array that should be
// generated would be [ 'Samsung Galaxy S10+ Plus', 'Apple iPhone 7 Plus', ... ]
// [ "Samsung Galaxy S10+ Plus", "Apple iPhone 7 Plus", "One Plus 6", ...  ]

const phoneName = phones.map(
    function(ph,idx){
        console.log(idx);
        return ph.name;
    }
)
console.log(phoneName)

// • Set a new price for every phone by adding a tax of 5%
// you want to loop through -> forEach
// const pnames = [];
phones.forEach(
    function( phone, idx ) {
        phone.price *= 1.05;
        // pnames.push( phone.name );
    }
);
console.log(phones)

// • Create a new array with details of only the new phones/ the helper must return true (item is selected) / false (item is not selected)
const newPhones = phones.filter(
    function( phone ) {
        return phone.type === 'new';
    }
);
console.log( newPhones );

// • Find the first phone whose price is less than $500 and print it
const firstNewPhone = phones.find(
    function( phone ) {
        return phone.price<500;
    }
);
console.log( firstNewPhone );






