const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./controllers/database')
const Cadastro = require('./controllers/Cadastro')
const md5 = require('md5')

//BANCO DE DADOS ---------------------------------------------------------------
connection.authenticate().then(() => {console.log("Conexão feita com o banco de dados!")})
.catch((erro) => {
  console.log(erro)
});

//BIBLIOTECAS ------------------------------------------------------------------
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROTAS ------------------------------------------------------------------------

app.get("/", (req, res) => {
    Cadastro.findAll()
    .then((cadastro) => {
      res.render("index", {cadastro: cadastro});
    })
  
  })


  app.listen(3000, () =>{
    console.log("A aplicação está funcionando!");
  })