
//importando o módulo HTTP do Node.js
const http = require('http');
const fs = require('fs');
const path = require('path');

//criando o servidor
const server = http.createServer((req, res) => {
    //definindo o caminho para o arquivo HTML
    const filePath = path.join(__dirname, 'index.html');
    
    //lendo o arquivo HTML e enviando como resposta
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro no servidor');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data); //envia o conteúdo do arquivo HTML
        }
    });
});

//definindo a porta do servidor
const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
