
const mobilePat1 = /[6-9][0-9]{9}/;
console.log(mobilePat1.test("71234567890"))
console.log(mobilePat1.test("51234567890"))
console.log(mobilePat1.test("57123456890"))
console.log(mobilePat1.test("712345678900"))


const mobilePat2 = new RegExp("^[6789][0-9]{9}$")
console.log(mobilePat2.test("71234567890"))
console.log(mobilePat2.test("51234567890"))
console.log(mobilePat2.test("571234567890"))
console.log(mobilePat2.test("712345678900"))







