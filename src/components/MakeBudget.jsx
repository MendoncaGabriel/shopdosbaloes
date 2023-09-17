import React, { useEffect, useState } from 'react';

function MakeBudget(){
    const [inputMessage, setInputMessage] = useState('');
    const [amount, setAmount] = useState('');
    const [size, setSize] = useState('');
    const [font, setFont] = useState('');
    const [color, setColor] = useState('');
    const [comments, setComments] = useState('');
    const [nameClient, setNameClient] = useState('');


    function selectColor(item, cor){
        const textBallon = document.getElementById('textBallon')
        var estiloComputado = window.getComputedStyle(item.target);
        let Color = estiloComputado.backgroundColor
        setColor(cor)


        textBallon.style.color = Color

        //reset
        document.querySelectorAll('.SelectColor').forEach((item)=>{
            item.style.border = '2px solid #F2ECEE'
            item.style.transform = 'scale(1)';
            item.style.zIndex = '1';
        })

        // item selecionado
        item.target.style.border = '2px solid #3B82F6'
        item.target.style.transform = 'scale(1.3)';
        item.target.style.zIndex = '2';
        
    }

    function SizeItem(item){
        const size = item.target.innerText

        
        let FontSize = 16
        if(size == 'Mine'){FontSize = 10}
        if(size == 'Pequeno'){FontSize = 14}
        if(size == 'Medio'){FontSize = 16}
        if(size == 'Grande'){FontSize = 20}
        if(size == 'Extra Grande'){FontSize = 24}
        if(size == 'Maximo'){FontSize = 30}
        
        const textBallon = document.getElementById('textBallon')
        textBallon.style.fontSize = FontSize + 'px'


    
        // reset
        document.querySelectorAll('.SizeItem').forEach((i)=>{
            i.style.backgroundColor = '#F3F4F6'
            i.style.color = '#5E6D85'
        })

        // item selecionado
        item.target.style.backgroundColor = '#3B82F6'
        item.target.style.color = 'white'

    }

    function FontSelect(item, font) {
        const fonts = {
            CourierNew: 'Courier New, Courier, monospace',
            FranklinGothicMedium: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
            GillSans: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
        }
    
        // reset
        document.querySelectorAll('.fontSelect').forEach((i) => {
            i.style.backgroundColor = '#F3F4F6';
            i.style.color = '#5E6D85';
        });
    
        // item selecionado
        item.target.style.backgroundColor = '#3B82F6';
        item.target.style.color = 'white';
    
        // mudar fonte
        let FONT = '';
        if (font == 'CourierNew') {
            FONT = fonts.CourierNew;
        }
        if (font == 'FranklinGothicMedium') {
            FONT = fonts.FranklinGothicMedium;
        }
        if (font == 'GillSans') {
            FONT = fonts.GillSans;
        }
        const textBallon = document.getElementById('textBallon');
        textBallon.style.fontFamily = FONT;
    
    }
    
    let mensagem = '🔴 Olá! Estou interessado em obter um orçamento para personalizar o seguinte ornamento:%0A%0A'
    let budget = `📝 Texto: ${inputMessage}%0A📦 Quantidade: ${amount}%0A📐 Tamanho: ${size}%0A🖋️ Fonte: ${font}%0A🎨 Cor: ${color}%0A📄 Observações: ${comments}%0A%0A Atenciosamente: ${nameClient}`

    let url = `https://api.whatsapp.com/send?phone=5592992376689&text=${mensagem}${budget}`

    

    return(
        <>
            <div className="border-2py-2 ">
                <h2 className='text-blue-500 font-bold text-center py-5'>CRIE SEU ORNAMENTO PERSONALIZADO</h2>

                {/* CONTENT */}
                <div className=" sticky top-0 z-50">

                    {/* Text */}
                    <div className=" backgroundWhiteTranspaent z-50 w-40 h-40 border-2 rounded-full absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <p 
                            id='textBallon'  
                            className='duration-300 rounded-full w-full h-full p-4 flex text-center overflow-hidden items-center justify-center border whitespace-pre-wrap font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                           
                        >
                            {inputMessage}
                            
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="flex overflow-x-auto snap-mandatory snap-x ">

                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozvK2s_YKdv5bwrfITqlrDRXHPvUHBGoj9w&usqp=CAU" 
                            alt=""
                            className="border-2  w-full flex-none snap-center"
                        />
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozvK2s_YKdv5bwrfITqlrDRXHPvUHBGoj9w&usqp=CAU" 
                            alt=""
                            className="border-2 w-full flex-none snap-center"
                        />

                    </div>
                </div>


                {/* CONFIGURAÇÕES    */}
                <div className="border-2  py-2 px-5 space-y-2 text-gray-700">
                    {/* Quanidade */}
                    <div>
                        <h2>Quantidade:</h2>
                        <input 
                        type="number" 
                        className='border w-full py-2 px-2' 
                        placeholder='QTD: 1' 
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    {/* Input */}
                    <div>
                        <h2>Texto</h2>
                        <textarea 
                            type="text"
                            placeholder="Digite seu texto aqui.."
                            name="" 
                            id="" 
                            cols="30" 
                            rows="3" 
                            className="border-2 rounded-sm px-2 py-1 m-auto block w-full"
                            onChange={(e) => setInputMessage(e.target.value)}
                        ></textarea>

                    </div>

                    {/* Tamanhos */}
                    <div>
                        <h2>Tamanho:</h2>
                        <div className=' flex space-x-2 snap-mandatory snap-x overflow-y-auto py-2 pb-5'>
                            <button onClick={(item)=>{SizeItem(item); setSize('Mine')}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Mine</button>
                            <button onClick={(item)=>{SizeItem(item); setSize('Pequeno')}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Pequeno</button>
                            <button onClick={(item)=>{SizeItem(item); setSize('Medio')}} className='SizeItem flex-none snap-start border px-3 py-2 bg-blue-500 text-white font-semibold'>Medio</button>
                            <button onClick={(item)=>{SizeItem(item); setSize('Grande')}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Grande</button>
                            <button onClick={(item)=>{SizeItem(item); setSize('Extra Grande')}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Extra Grande</button>
                            <button onClick={(item)=>{SizeItem(item); setSize('Maximo')}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Maximo</button>
                        </div>
                        
                    </div>

                    {/* Font */}
                    <div>
                        <h2>Fonte:</h2>
                        <div className=' flex space-x-2 snap-mandatory snap-x overflow-y-auto py-2 pb-5'>
                            <button onClick={(item)=>{setFont('Courier New'); FontSelect(item, 'CourierNew')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Courier New</button>
                            <button onClick={(item)=>{setFont('Franklin Gothic Medium'); FontSelect(item, 'FranklinGothicMedium')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Franklin Gothic Medium</button>
                            <button onClick={(item)=>{setFont('Gill Sans'); FontSelect(item, 'GillSans')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Gill Sans</button>
                            <button onClick={(item)=>{setFont(''); FontSelect(item, '')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{setFont(''); FontSelect(item, '')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{setFont(''); FontSelect(item, '')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{setFont(''); FontSelect(item, '')}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                        </div>
                        
                    </div>

                    {/* Color */}
                    <div>
                        <h2>Cor:</h2>
                        <div className=' flex space-x-2 snap-mandatory snap-x overflow-y-auto py-3 pb-5 px-3'>
                            <div onClick={(cor)=>{selectColor(cor, 'Preto')}} className='transform scale-125 duration-300 SelectColor flex-none snap-start border-2 border-blue-500 w-10 h-10 rounded-full bg-black'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Branco')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-white'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Azul')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-blue-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Vermelho')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-red-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Verde')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-green-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Amarelo')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-yellow-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Roxo')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-purple-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Cinza')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-gray-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Laranja')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-orange-500'></div>
                            <div onClick={(cor)=>{selectColor(cor, 'Rosa')}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-pink-500'></div>
                        </div>
                        
                    </div>

                    {/* Nome Pessoa */}
                    <div>
                        <h2>Nome Completo:</h2>
                        <input type="text"  className='border w-full p-2' placeholder='Digite seu nome aqui...' onChange={(e)=>{setNameClient(e.target.value)}} />
                    </div>


                    {/* Observações */}
                    <div>
                        <h2>Observações:</h2>
                        <textarea cols="30" rows="5" className='border w-full' onChange={(e)=>setComments(e.target.value)}></textarea>
                    </div>

                    <a 
                        href={url} target='_blank'
                        className='bg-blue-500 text-white w-full flex items-center justify-center rounded-sm py-2 text-lg font-semibold'

                    >
                        Solicitar Orçamento
                    </a>
                </div>


            </div>
        </>
    )
}
export default MakeBudget