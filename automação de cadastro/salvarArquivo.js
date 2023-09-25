const fs = require('fs');


function salvarArrayComoArquivo(array, nomeArquivo) {
    const conteudo = JSON.stringify(array);
    
    fs.writeFile(nomeArquivo, conteudo, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao salvar o arquivo:', err);
        } else {
            console.log(`O arquivo ${nomeArquivo} foi salvo com sucesso.`);
        }
    });
}

const nomeDoArquivo = 'meuArray.js';
const array = ''
salvarArrayComoArquivo(array, nomeDoArquivo);
