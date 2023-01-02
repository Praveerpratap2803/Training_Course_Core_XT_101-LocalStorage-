
strToMatch1="clearfix alert-abC text-bold alert-deF";
strToMatch2="clearfix aler-abC text-bold aler-deF";

const classPat1 = /alert-\w+/g

console.log(strToMatch1.search(classPat1))
console.log(strToMatch2.search(classPat1))

















