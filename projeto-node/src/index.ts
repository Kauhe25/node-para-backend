//console.log("TS com Node!!");

import express, { Request, Response } from "express";

const app = express();
const port = 3030;

app.get('/', (req: Request, res: Response): void => {
    res.send("Hello word com Express usando TS!!!");
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