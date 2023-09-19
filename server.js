import express from "express"; // Importando express

const app = express(); //iniciando variavel princial express em app


app.get("/", function(req, res){
  res.sendFile("C:/Users/Gabriel/Documents/GitHub/shopdosbaloes/dist/index.html")
})



app.listen(8081, function(){
  console.log('Servidor rodando na url: http://localhost:8081')
});