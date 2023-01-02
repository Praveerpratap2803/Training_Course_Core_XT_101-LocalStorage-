"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PK;
PK = {
    name: "PK",
    cast: ["Amir Khan", "Kareena Kapoor"],
    year: 7,
    collection: 500,
    addToCast: function (member) {
        this.cast.push(member);
    },
    addToCollection: function (amount) {
        this.collection += amount;
    },
};
PK.addToCast("Shushant Singh Rajput");
PK.addToCollection(100);
console.log(PK);
