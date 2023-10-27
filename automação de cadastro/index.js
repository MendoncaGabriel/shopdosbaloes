import  DATABASE  from './Data/parametros.js';
import TOOLS from './tools.js'

var MARCA = 'JOY'
const data = DATABASE()
const tools = TOOLS(MARCA)

let output = []
function clearData(){
    data.product.forEach((element)=>{

        // PRE CONSTRUÇÃO DO PRODUTO -------------------------------------------------------------------------------------------------------------------------------
            let product = {};
            product.id = element.CODIGOS          
            product.brand = ''                    
            product.reference = element.CODIGOS     
            product.ean = element.EAN             
            product.cost = element.CUSTO          
            product.price = element.PRECO        
            product.stock = 10                    
            product.weight = 100                  
            product.name = ''                     
            product.url = ''                      
            product.description = ''              
            product.display = 'Sim'              
            product.type = ''                    
            product.amount = ''                  
            product.size = ''                    
            product.model = ''                   
            product.color = ''                   
            product.varejo = element.DESCRICAO   
            product.categ1 = ''
            product.categ2 = ''

        // IDENTIFICADORES DE PARAMETROS -------------------------------------------------------------------------------------------------------------------------------
            let dataColor = data.color
            let dataBrand = data.brand
            let dataAmount = data.amount
            let dataModel = data.model
            let dataType = data.type
            let dataSize = data.size

            for (const color in dataColor) { //identifica a cor
                let includedIn =  tools.checkIncludedWord(element.DESCRICAO, color) //verifica se a palavra esta inclusa na descrição
                if(includedIn == true){
                    product.color = dataColor[color]
                    break;
                }
            }
            for (const brand in dataBrand) { //identifica a marca
                let includedIn =  tools.checkIncludedWord(element.FORNECEDOR, brand) //verifica se a palavra esta inclusa na descrição
                if(includedIn == true){
                    product.brand = dataBrand[brand]
                    break;
                }
            }
            for (const amount in dataAmount) { //identifica a quantidade
                let includedIn =  tools.checkIncludedWord(element.DESCRICAO, amount) //verifica se a palavra esta inclusa na descrição
                if(includedIn == true){
                    product.amount = dataAmount[amount]
                    break;
                }
            }
            for (const model in dataModel) { //identifica o modelo
                let includedIn =  tools.checkIncludedWord(element.DESCRICAO, model) //verifica se a palavra esta inclusa na descrição
                if(includedIn == true){
                    product.model = dataModel[model]
                    break;
                }
            }
            for (const type in dataType) { //identifica o tipo do produto
                let includedIn =  tools.checkIncludedWord(element.DESCRICAO, type) //verifica se a palavra esta inclusa na descrição
                if(includedIn == true){
                    product.type = dataType[type]
                    break;
                }
            }
            for (const size in dataSize) { //identifica a quantidade
                let includedIn =  tools.checkIncludedWord(element.DESCRICAO, size) //verifica se a palavra esta inclusa na descrição
                if(includedIn == true){
                    product.size = dataSize[size]
                    break;
                }
            }

        //POS CONTRUÇÃO -------------------------------------------------------------------------------------------------------------------------------
            product.name = tools.buildName(product.type, product.color, product.amount, product.model, product.brand, product.size)
            product.description = tools.buildDescription(product.name, product.brand, product.color, product.size, product.amount)
            product.url = tools.buildImg(product.brand, product)

        //REQUISITOS PARA EXPORTAR -------------------------------------------------------------------------------------------------------------------------------
            if(product.brand == MARCA){
                output.push(product)
            }
        
    })
    console.log('------------------------------------------------------------')
    console.log('[PRODUTOS EM OUTPUT: ' + output.length + ']')
}clearData()




function CheckProducts(comander){
    let color = 0
    let type = 0
    let model = 0
    let amount = 0
    let size = 0

    output.forEach((element)=>{ //produtos
        //verificar ausencia MODEL ----------------------------------------------------------------------------------------------------------------
        let AusenciaModel = true;
        for (const model in data.model) { 
            let includedIn =  tools.checkIncludedWord(element.description, model)
            if(includedIn == true){
                AusenciaModel = false
                break;
            }
        }
        if(AusenciaModel == true){
            console.log('MODELO NÃO IDENTIFICADO: ' + element.varejo+ ', EAN: ' + element.ean)
        }else{
            model++
        }


        //verificar ausencia de amount ----------------------------------------------------------------------------------------------------------------
        let AusenciaAmount = true;
        for (const amount in data.amount) { 
            let includedIn =  tools.checkIncludedWord(element.description, amount)
            if(includedIn == true){
                AusenciaAmount = false
                break;
            }
        }

        if(AusenciaAmount == true){
            console.log('AMOUNT NÃO IDENTIFICADO: ' + element.varejo+ ', EAN: ' + element.ean)
        }else{
            amount++
        }


        //verificar ausencia de cor ----------------------------------------------------------------------------------------------------------------
        let AusenciaCor = true;
        for (const color in data.color) { //identifica a cor
            let includedIn =  tools.checkIncludedWord(element.description, color)
            if(includedIn == true){
                AusenciaCor = false
                break;
            }
        }

        if(AusenciaCor == true && model == 0){
            console.log('COR NÃO IDENTIFICADA: ' + element.varejo + ', EAN: ' + element.ean)
        }else{
            color++
        }


        //verificar ausencia de type ----------------------------------------------------------------------------------------------------------------
        let AusenciaType = true;
        for (const type in data.type) { //identifica a cor
            let includedIn =  tools.checkIncludedWord(element.description, type)
            if(includedIn == true){
                AusenciaType = false
                break;
            }
        }

        if(AusenciaType == true){
            console.log('TYPE NÃO IDENTIFICADO: ' + element.varejo+ ', EAN: ' + element.ean)
        }else{
            type++
        }

        //verificar ausencia SIZE ----------------------------------------------------------------------------------------------------------------
        let AusenciaSize = true;
        for (const size in data.size) { //identifica a cor
            let includedIn =  tools.checkIncludedWord(element.varejo, size)
            if(includedIn == true){
                AusenciaSize = false
                break;
            }
        }

        if(AusenciaSize == true){
            console.log('SIZE NÃO IDENTIFICADO: ' + element.varejo+ ', EAN: ' + element.ean)
        }else{
            size++
        }

    })

    //Console identificadores------------------------------------------------------------------------------------------------------------------------

    if(color !== 0 && comander !== 'coloroff'){
        console.log('CORES - [100% IDENTIFICADO!]' + ` (${color})` )
    }
    if(type !== 0 && comander !== 'typeoff'){
        console.log('TIPOS - [100% IDENTIFICADO!]' + ` (${type})`)
    }
    if(model !== 0 && comander !== 'modeloff'){
        console.log('MODELOS - [100% IDENTIFICADO!]' + ` (${model})`)
    }
    if(amount !== 0 && comander !== 'amountoff'){
        console.log('QUANTIDADES - [100% IDENTIFICADO!]' + ` (${amount})`)
    }
    if(size !== 0 && comander !== 'sizeoff'){
        console.log('TAMANHOS - [100% IDENTIFICADO!]' + ` (${size})`)
    }


    console.log('------------------------------------------------------------')
   
}
let save = []
function SaveProductsInExcel(){
    function compararTamanhos(a, b) {
        // Verifica se a e b têm a propriedade size e são strings
        if (a.size && typeof a.size === 'string' && b.size && typeof b.size === 'string') {
            // Extrai os números dos tamanhos usando expressões regulares
            let tamanhoA = parseInt(a.size.match(/\d+/)[0]);
            let tamanhoB = parseInt(b.size.match(/\d+/)[0]);
        
            // Compara os tamanhos numéricos
            if (tamanhoA < tamanhoB) {
                return -1;
            }
            if (tamanhoA > tamanhoB) {
                return 1;
            }
            return 0;
        }
        // Se size não for uma string válida, retorna 0 para indicar que a ordem não importa
        return 0;
    }
 

    //REMOVER RAIZES REPETIDAS-----------------------------------------------------------------------------------------------------------------------
        var singleProduct = [];
        output.forEach((element)=>{
            let push = true
            for(let i = 0; i < singleProduct.length; i++){
                if(
                    element.brand == singleProduct[i].brand  
                    && element.color == singleProduct[i].color
                    && element.type == singleProduct[i].type 
                    && element.amount == singleProduct[i].amount 
                    && element.model == singleProduct[i].model 
                    //&& element.size   == singleProduct[i].size  //remover
                
                ){
                    push = false
                    break
                }else{
                    console.log('ITEM REPETIDO: ' + element.brand, element.color, element.type, element.amount, element.model)
                }
            };
            if(push == true){
                singleProduct.push(element)
            };
        });
        tools.saveInExcel(singleProduct, 'produtos') ; //salvar produtos raiz
        


    //REMOVER VARIANTES REPETIDAS-----------------------------------------------------------------------------------------------------------------------
        var variable = [];
        output.forEach((element)=>{
            let push = true
            for(let i = 0; i<variable.length;i++){ //remover repetidos
                if(
                    element.brand == variable[i].brand 
                    && element.color == variable[i].color 
                    && element.amount == variable[i].amount
                    && element.size == variable[i].size 
                    && element.type == variable[i].type 
                    && element.model == variable[i].model 
             
                ){
                    push = false
                    break
                }
            }
            if(push == true){variable.push(element)}    
        })



    //ASSOCIAR VARIANTES A RAIZES-----------------------------------------------------------------------------------------------------------------------
        let variableExcel = []
        output.forEach((variante)=>{
            singleProduct.forEach((raiz)=>{
                if(
                    variante.brand == raiz.brand
                    && variante.color == raiz.color 
                    && variante.amount == raiz.amount 
                    && variante.model == raiz.model 
                    && variante.type == raiz.type 
                ){

                    let variableproduct = {}
                    variableproduct.id = ''
                    variableproduct.idRef = raiz.reference
                    variableproduct.reference = variante.reference+1
                    variableproduct.variante = 'tamanho'
                    variableproduct.amount = variante.amount
                    variableproduct.price = variante.price
                    variableproduct.type = variante.type
                    variableproduct.size = variante.size
                    variableproduct.color = variante.color
                    variableproduct.stock = 10
                    variableproduct.ean = variante.ean

                    //salvar 150, 250, 260, 350 ...
                    if(
                        variante.size == '150"' && raiz.size == '150"' ||
                        variante.size == '150"' && raiz.size == '250"' ||
                        variante.size == '150"' && raiz.size == '260"' ||
                        variante.size == '150"' && raiz.size == '350"' ||

                        variante.size == '250"' && raiz.size == '150"' ||
                        variante.size == '250"' && raiz.size == '250"' ||
                        variante.size == '250"' && raiz.size == '260"' ||
                        variante.size == '250"' && raiz.size == '350"' ||

                        variante.size == '260"' && raiz.size == '150"' ||
                        variante.size == '260"' && raiz.size == '250"' ||
                        variante.size == '260"' && raiz.size == '260"' ||
                        variante.size == '260"' && raiz.size == '350"' ||

                        variante.size == '350"' && raiz.size == '150"' ||
                        variante.size == '350"' && raiz.size == '250"' ||
                        variante.size == '350"' && raiz.size == '260"' ||
                        variante.size == '350"' && raiz.size == '350"' 
                
                    ){
                        variableExcel.push(variableproduct)
                    }
                    //salvar diferente de 260, 250, 350, 150 ...
                    else if(
                        variante.size !== '250"' && raiz.size !== '250"' &&
                        variante.size !== '260"' && raiz.size !== '260"' &&
                        variante.size !== '350"' && raiz.size !== '350"' &&
                        variante.size !== '150"' && raiz.size !== '150"'
                    ){
                        variableExcel.push(variableproduct)
                    }else{
                        variableproduct = {};
                    }

                }
            })
        })

        let order = variableExcel.sort(compararTamanhos)
        tools.saveInExcel(order, 'variantes') ; //salvar variantes
            



    //CONSOLE IMPRESSÃO -----------------------------------------------------------------------------------------------------------------------
        console.table([
            { 'Categoria': 'TOTAL', 'Quantidade': output.length },
            { 'Categoria': 'RAIZ', 'Quantidade': singleProduct.length },
            { 'Categoria': 'VARIANTE', 'Quantidade': variable.length }
        ])
}
let report = []
function PrintReport(){

    output.forEach((element)=>{
        report.push({
            brand: element.brand,
            color: element.clor,
            model: element.model,
            type: element.type,
            amount: element.amount,
            price: element.price,
            varejo: element.varejo,
            url: tools.buildImg(MARCA, element)
        })
        
    })
    let nome = MARCA.replace(/ /g, '')
    tools.saveInJSON(report, nome)
}


//PrintReport()
// CheckProducts('modeloff')
SaveProductsInExcel()

//remover itens repetido
//console.log(tools.removeDuplicates(data.model))

//organizar maior para o menor
//console.log(tools.sortByCharacterCount(data.model))