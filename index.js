import app from './src/app.js';
//import http from "http"; 

const port = 3000;

/*const rotas = { 

    "/": "Projeto api-Livros", 

    "/livros": "Pagina de Livros" 

}

const server = http.createServer((req, res) => { //requisicao para capturar o id do livro no projeto req 

 

    res.writeHead(200, {"content-type": "text/plain"}) 

    res.end(rotas[req.url]) 

 }) 
*/
 

 

 

 app.listen(port, () => { 
    console.log("Servidor executando na porta ",port) 

 }) 