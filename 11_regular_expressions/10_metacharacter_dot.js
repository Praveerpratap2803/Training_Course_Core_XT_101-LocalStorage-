
const pat = /alert./g
const str1 = 'text-bold alert-success alert_error'
const str2 = 'text-bold alert';

console.log(str1.match(pat));//true

console.log(str2.match(pat));//false





