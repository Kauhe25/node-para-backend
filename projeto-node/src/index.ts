//console.log("TS com Node!!");

import express, { Request, Response } from "express";

const app = express();
const port = 3030;


app.get('/', (req: Request, res: Response): void => {
    const aluno = {
        nome: "Kauhe",
        data_nascimento: "1994-12-25"
    }
    res.json(aluno);
})

// tratando dados via query string
app.get('/clientes', (req: Request, res: Response): void => {
    const {nome, idade} = req.query as {nome: string; idade: string}; 
    res.send(`Clientes: nome: ${nome}, idade: ${idade}.`);
})

// tratando via parametros
app.get('/clientes/:id', (req: Request, res: Response): void => {
    console.log(req.params);
})


app.listen(port, () => {
    console.log(`Serv. executando na porta ${port}`);
})