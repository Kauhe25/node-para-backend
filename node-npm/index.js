console.log('Executando programa');

import yargs from "yargs";
//const yargs = require("yargs/yargs");

import { hideBin } from "yargs/helpers";
//const { hideBin } = require("yargs/helpers");


const argv = yargs(hideBin(process.argv)).argv;


const {nome, curso} = argv;
console.log(`Seu nome é ${nome}. seu curso é de ${curso} `);