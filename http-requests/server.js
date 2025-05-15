import http from "http";

const server = http.createServer((req, res) => {
    if( req.url === '/'){
        const instrutor = "Cicerooo";
        const total = (200 + 200) * 4;
        res.end(`Hello word - Node - Intrutor ${instrutor} - Total ${total}`);
    } else {
        res.end("Pagina nao encontrada");
    }
})

const port = 3030;
server.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`);
});