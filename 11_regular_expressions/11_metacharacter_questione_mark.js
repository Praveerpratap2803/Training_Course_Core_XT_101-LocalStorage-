
const pat = /\.s?css/;
const filename1 = 'app.scss';
const filename2 = 'app.css';
const filename3 = 'app.sscss';

console.log(pat.test(filename1))//true
console.log(pat.test(filename2))//true
console.log(pat.test(filename3))//false












