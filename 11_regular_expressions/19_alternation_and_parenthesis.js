
const pat1 = /(ab|cd|ef)/g;
console.log('abxycd'.match(pat1));
console.log('cdxy'.match(pat1));
console.log('acxy'.match(pat1));


const pat2 = /(ab|cd|ef)+/g;
console.log('ababxy'.match(pat2));
console.log('abcdxy'.match(pat2));
console.log('abcdefabefxyabcdabcdef'.match(pat2));























