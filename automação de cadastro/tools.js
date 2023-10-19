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

    function checkIncludedWord(word, check){ //verifica se a palavra esta inclusa
        if (word.toUpperCase().includes(check.toUpperCase())) {
            return true
        }else{
            return false
        }
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

    var imgContainer = [];
    var contId = 0
    function buildImg(brand, element){
        
        if(brand == MARCA){
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


    return{ordenarObjetoPorPalavras, buildImg, checkIncludedWord, saveInExcel, buildDescription, buildName}
}

export default TOOLS