
strToMatch="clearfix alert-abC text-bold alert-deF";

const alertPat1 = /alert-[a-zA-Z]+/
let result1 = strToMatch.match(alertPat1)
console.log(result1)


const alertPat2 = /alert-[a-zA-Z]+/ig
let result2 = strToMatch.match(alertPat2)
console.log(result2)
console.log(result2[0])
console.log(result2[1])
console.log("no. of items in result2",result2.length)












