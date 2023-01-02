
const pat = /\.s{2,4}css/;
const filename1 = 'app.scss';
const filename2 = 'app.css';
const filename3 = 'app.sscss';
const filename4 = 'app.ssscss';
const filename5 = 'app.sssscss';
const filename6 = 'app.ssssscss';
const filename7 = 'app.scscss';

console.log(pat.test(filename1))//false
console.log(pat.test(filename2))//false
console.log(pat.test(filename3))//true
console.log(pat.test(filename4))//true
console.log(pat.test(filename5))//true
console.log(pat.test(filename6))//false
console.log(pat.test(filename7))//false












