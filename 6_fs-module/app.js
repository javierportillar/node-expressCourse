const {readFileSync, writeFileSync} = require('fs');
// const fs = require("fs");

const firstTxt = readFileSync('./folder/text1.txt', 'utf8');
const secondTxt = readFileSync('./folder/text2.txt', 'utf8');

writeFileSync('./folder/result-sync.txt', `Here is the result: ${firstTxt}, ${secondTxt}`, {flag: 'a'});
console.log(firstTxt, secondTxt);
