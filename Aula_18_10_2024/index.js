const express = require('express')
const path = require("path") //servir o diretorio
const app = express()
const port = 3000

//rota principal
app.get('/', (req, res) => {
  //res.send('Hello World!')
    const filePath = path.join(__dirname, "public", "index.html") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.get ('/contato', (req, res) =>{
    const filePath = path.join(__dirname, "public", "contato.html") //informar o caminho
    res.sendFile(filePath) //gerando o caminho para o cliente
})

app.use(express.urlencoded({extended: true})) //middleware para tratar rota do tipo post
app.post('/resultado', (req, res) =>{
    const {nome, email} = req.body
    res.send(`Dados recebidos. Seja bem-vindo: ${nome}`)
})

app.get('/script', (req, res) => {
    //res.send('Hello World!')
      const filePath = path.join(__dirname, "public", "script.js") //informar o caminho
      res.sendFile(filePath) //gerando o caminho para o cliente
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
