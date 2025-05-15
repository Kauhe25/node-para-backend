//console.log("TS com Node!!");

import express, { Request, Response } from "express";

const app = express();
const port = 3030;

// soma
app.get('/soma', (req: Request, res: Response): void => {
    const resultado = 40 + 60;
    res.send(`Resultado da soma: ${resultado}`);
})

app.get('/horario', (req: Request, res: Response): void => {

    res.type('html');
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();
    let cor = "";
    let segundoEstilizado = "";

    if(segundo % 2 == 0){
        cor = "red";
    }else {
        cor = "blue";
    }

    segundoEstilizado = `<a style=color:${cor}>${segundo}</a>`;
    res.send(`<div>A hora atual é: ${hora}:${minuto}:${segundoEstilizado}</div>`);

})

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