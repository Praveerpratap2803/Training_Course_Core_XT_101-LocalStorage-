

const goodPat1 = /^good-/i;

console.log(goodPat1.test("good-morning"))
console.log(goodPat1.test("Good-evening"))
console.log(goodPat1.test("gOOd-night"))

const goodPat2 = new RegExp("^good-","i")

console.log(goodPat1.test("good-morning"))
console.log(goodPat1.test("Good-evening"))
console.log(goodPat1.test("gOOd-night"))

const panPat = /^[a-z]/
console.log(panPat.test(''));











