const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//console.log(argv);
const {nome, dia} = argv;

console.log(argv.nome);
console.log(argv.dia);
console.log(`Hello, ${nome}. Hoje é ${dia} `);