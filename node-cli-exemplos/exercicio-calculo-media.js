const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//console.log(argv);
const {nota1, nota2} = argv;
const mediaFinal = (argv.nota1 + argv.nota2) / 2;
const aprovado = mediaFinal >= 6 ? true : false;

console.log(`Nota 1: ${argv.nota1}, Nota 2: ${argv.nota2}`);
console.log(`A média final é ${mediaFinal}.`);

if(aprovado){
    console.log("Parabéns, aluno aprovado.");
}else{
    console.log('Ops, aluno Reprovado');
}