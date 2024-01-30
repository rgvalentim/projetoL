import express from "express";

const app = express();
app.use(express.json()); //para forcar o uso do arquivo .json
const acervo = [
    { isbn: "0001", nome: "Odissea"},
    { isbn: "0002", nome: "Iliada"}
]

//rota principal
app.get("/", (req, res) => {

    res.status(200).send("Pagina Principal da Api-Livros");

})

//Rota Livros
app.get("/acervo", (req, res) => {

    res.status(200).json(acervo);

})

//Rota para CADASTRO
app.post("/acervo", (req, res) => {
    acervo.push(req.body);
    res.status(201).send("Livro Cadastrado com sucesso");
})

export default app;