import http from "http";

const server = http.createServer((req, res) => {

    
    if( req.url === '/clientes'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1 style="color: red;">Seção de Clientes</h1>');
    }else if( req.url === '/contato'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1 style="color: green;">Seção de Contato</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("Pagina nao encontrada");
    }
})

const port = 3030;
server.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`);
});