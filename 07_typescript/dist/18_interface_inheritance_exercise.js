"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tom;
tom = {
    name: "Tom and Jerry",
    cast: ["tom", "Jerry"],
    dubbingArtists: ["Richard Kind", "Willium Hanna"],
    resolution: "4k",
    year: 10,
    collection: 100,
    addToCast: function (member) {
        this.cast.push(member);
    },
    addToCollection: function (amount) {
        this.collection += amount;
    },
    changeResolution: function (resolution) {
        this.resolution = resolution;
    }
};
tom.addToCast("Quacker");
tom.addToCollection(100);
tom.changeResolution("16k");
console.log(tom);
