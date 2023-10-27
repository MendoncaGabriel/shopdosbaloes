import fs from 'fs'
import XLSX from 'xlsx';


function TOOLS(MARCA){
    function ordenarObjetoPorPalavras(objeto) {
        const items = Object.keys(objeto).map(key => [key, objeto[key]]);

        items.sort((a, b) => {
            const palavrasA = a[0].split(' ').length;
            const palavrasB = b[0].split(' ').length;
            // Ordenar por número de palavras (descendente), em seguida, por ordem alfabética (ascendente)
            return palavrasB - palavrasA || a[0].localeCompare(b[0]);
        })

        const resultado = {};
        items.forEach(item => {
            resultado[item[0]] = item[1];
        })

        return resultado;
    }

    function saveInExcel(array, nomeArquivo) {
        const ws = XLSX.utils.json_to_sheet(array);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Planilha');
    
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
    
        fs.writeFile(`${nomeArquivo}.xlsx`, excelBuffer, (err) => {
            if (err) {
                console.error('Erro ao salvar o arquivo Excel:', err);
            } else {
                console.log(`O arquivo ${nomeArquivo}.xlsx foi salvo com sucesso.`);
            }
        });
    }
    function saveInJSON(array, nomeArquivo) {
        const jsonString = JSON.stringify(array);
    
        fs.writeFile(`${nomeArquivo}.json`, jsonString, (err) => {
            if (err) {
                console.error('Erro ao salvar o arquivo JSON:', err);
            } else {
                console.log(`O arquivo ${nomeArquivo}.json foi salvo com sucesso.`);
            }
        });
    }

    function checkIncludedWord(word, check){ //verifica se a palavra esta inclusa
   
        let A = word.toUpperCase()
        let B = check.toUpperCase()


        return A.includes(B);
    }    
    function buildDescription(name, brand, color, size, amount){

        let description = `<p>${name.toUpperCase()} <br><br>
        Marca: ${brand.toUpperCase()}, <br>
        Cor: ${color.toUpperCase()}, <br>
        Tamanho: ${size.toUpperCase()}, <br>
        Quantidade: Pacote com ${amount.toUpperCase()}.
        </p>
        `
        return description
        
    }
    function buildName(type, color, amount, model, brand, size){
        let name = 'BALÃO DE LATEX'
        
        if(size == '250"'){name += ' ' + 'GIGANTE'}
        if(size == '350"'){name += ' ' + 'SUPER GIGANTE'}
        if(model !== '' && model !== '-'){name += ' ' + model.toUpperCase()}
        if(!type){name += ' DECORADO'}
        if(type){name += ' ' + type}
        if(color && color !== ''){name += ' ' + color.toUpperCase()}
        // if(type && type !== ''){name += ' ' + type.toUpperCase()}
        if(amount && amount !== '' ){name += ' ' + amount.toUpperCase()}
        if(!amount && amount == ''){name += ' 25 UNIDADES'}
        if(brand && brand !== ''){name += ' ' + brand.toUpperCase()}

        name += ' - SHOP DOS BALÕES'
        return name
    }

    //remover parametros duplicados
    function removeDuplicates(obj) {
        const uniqueValues = [...new Set(Object.values(obj))];
        const uniqueObject = {};
    
        uniqueValues.forEach(value => {
            Object.keys(obj).forEach(key => {
                if (obj[key] === value) {
                    uniqueObject[key] = value.toUpperCase(); // Converte o valor para caixa alta
                }
            });
        });
    
        return uniqueObject;
    }

    //ordenar maior para o menor
    function sortByCharacterCount(obj) {
        const sortedKeys = Object.keys(obj).sort((a, b) => b.length - a.length);
        const sortedObject = {};
    
        sortedKeys.forEach(key => {
            sortedObject[key] = obj[key];
        });
    
        return sortedObject;
    }

    var imgContainer = [];
    var contId = 0
    function buildImg(brand, element){
        
        if(brand == MARCA ){
            var pushItem = true
            for(let i = 0; i<imgContainer.length; i++){
                if(
                    imgContainer[i].color.toUpperCase().replace(' ', '') == element.color.toUpperCase().replace(' ', '')
                    && imgContainer[i].type.toUpperCase().replace(' ', '') == element.type.toUpperCase().replace(' ', '')
                    && imgContainer[i].brand.toUpperCase().replace(' ', '') == element.brand.toUpperCase().replace(' ', '')
                    && imgContainer[i].model.toUpperCase().replace(' ', '') == element.model.toUpperCase().replace(' ', '')
                ){
                    pushItem = false
                    element.idd = imgContainer[i].idd
                    break
                }
            }

            if(pushItem == true){
                contId++
                element.idd = contId
                imgContainer.push(element)
            }
            
            let url = 'https://mendoncagabriel.github.io/shopdosbaloes/imagem/'
            url += brand.toLowerCase().replace(' ', '') + '/' 
            url += element.idd; 
            url += '.png' //formato da imagem
            return url
        }
    }


    return{ordenarObjetoPorPalavras, sortByCharacterCount, buildImg, checkIncludedWord, saveInExcel, buildDescription, buildName, saveInJSON, removeDuplicates}
}

export default TOOLS



function downloadAndRenameImage(url, nome) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const nomeArquivo = nome.toLowerCase().replace(/[^a-z0-9]/g, '') + '.jpg'; // Força a extensão para .jpg
            const urlBlob = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = urlBlob;
            link.download = nomeArquivo;
            link.click();
            
            URL.revokeObjectURL(urlBlob); // Liberar o objeto URL da memória
        })
        .catch(error => console.error('Erro:', error));
}

// Exemplo de uso:
// const url = 'https://baloesjoy.com.br/wp-content/uploads/2023/01/violeta-450x450.jpg';
// const nome = 'Nome_da_Imagem';

// downloadAndRenameImage(url, nome);


// // Exemplo de uso:
// const url = 'URL_DA_IMAGEM_AQUI';
// const nome = 'Nome_da_Imagem';

// downloadAndRenameImage(url, nome);
