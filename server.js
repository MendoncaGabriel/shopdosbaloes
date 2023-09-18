import express from 'express';

// Crie uma instância do Express
const app = express();

// Defina uma rota básica
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Express!');
});

// Defina a porta em que o servidor irá ouvir
const port = 3000;

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);
});
