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

app.get('/json', (req: Request, res: Response): void => {
    const aluno = {
        nome: "Kauhe",
        data_nascimento: "1994-12-25"
    }
    res.status(301).json(aluno);
})

app.get('/pdf', (req: Request, res: Response): void => {
    res.contentType("application/pdf")
    res.send("Aqui seria um PDF");
})

app.get('/xml', (req: Request, res: Response): void => {
    const xmlString = `
        <livro>
        <titulo>O Senhor dos Anéis</titulo>
        <autor>J.R.R. Tolkien</autor>
        <ano>1954</ano>
        </livro>
        `;
    res.contentType("application/xml")
    res.send(xmlString);
})

app.get('/clientes', (req: Request, res: Response): void => {
    res.send("Rota de clientes");
})

// não ira funcionar
app.post('/contato', (req: Request, res: Response): void => {
    res.send("Post recebido");
})

app.listen(port, () => {
    console.log(`Serv. executando na porta ${port}`);
})