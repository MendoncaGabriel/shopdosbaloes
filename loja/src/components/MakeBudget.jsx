import React, { useEffect, useState } from 'react';

function MakeBudget(){
    const [inputMessage, setInputMessage] = useState('');

    function selectColor(item){
        const textBallon = document.getElementById('textBallon')
        var estiloComputado = window.getComputedStyle(item.target);
        let Color = estiloComputado.backgroundColor
        console.log(Color)

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
    
        // reset
        document.querySelectorAll('.SizeItem').forEach((i)=>{
            i.style.backgroundColor = '#F3F4F6'
            i.style.color = '#5E6D85'
        })

        // item selecionado
        item.target.style.backgroundColor = '#3B82F6'
        item.target.style.color = 'white'

    }

    function FontSelect(item){
        // reset
        document.querySelectorAll('.fontSelect').forEach((i)=>{
            i.style.backgroundColor = '#F3F4F6'
            i.style.color = '#5E6D85'
        })

        // item selecionado
        item.target.style.backgroundColor = '#3B82F6'
        item.target.style.color = 'white'
    }
  

    return(
        <>
            <div className="border-2py-2 max-w-sm">
                <h2 className='text-blue-500 font-bold text-center py-5'>CRIE SEU ORNAMENTO PERSONALIZADO</h2>
                <div className="relative">

                    {/* Text */}
                    <div className=" backgroundWhiteTranspaent z-50 w-40 h-40 border-2 rounded-full absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p id='textBallon'  className='rounded-full w-full h-full p-4 flex text-center overflow-hidden items-center justify-center border whitespace-pre-wrap font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{inputMessage}</p>
                    </div>

                    {/* Carousel */}
                    <div className="flex overflow-x-auto snap-mandatory snap-x">

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


                <div className="border-2  py-2 px-5 space-y-2 text-gray-700">
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
                            <button onClick={(item)=>{SizeItem(item)}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Mine</button>
                            <button onClick={(item)=>{SizeItem(item)}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Pequeno</button>
                            <button onClick={(item)=>{SizeItem(item)}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Medio</button>
                            <button onClick={(item)=>{SizeItem(item)}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Grande</button>
                            <button onClick={(item)=>{SizeItem(item)}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Extra Grande</button>
                            <button onClick={(item)=>{SizeItem(item)}} className='SizeItem flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Maximo</button>
                        </div>
                        
                    </div>


                    {/* Font */}
                    <div>
                        <h2>Fonte:</h2>
                        <div className=' flex space-x-2 snap-mandatory snap-x overflow-y-auto py-2 pb-5'>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                            <button onClick={(item)=>{FontSelect(item)}} className='fontSelect flex-none snap-start border px-3 py-2 bg-gray-100 font-semibold'>Nome da fonte</button>
                        </div>
                        
                    </div>


                    {/* Color */}
                    <div>
                        <h2>Cor:</h2>
                        <div className=' flex space-x-2 snap-mandatory snap-x overflow-y-auto py-3 pb-5'>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-black'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-white'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-blue-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-red-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-green-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-yellow-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-purple-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-gray-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-orange-500'></div>
                            <div onClick={(cor)=>{selectColor(cor)}} className='duration-300 SelectColor flex-none snap-start border-2 w-10 h-10 rounded-full bg-orange-500'></div>
                        </div>
                        
                    </div>

     

                    {/* Textarea */}
                    <div>
                        <h2>Observações:</h2>
                        <textarea name="" id="" cols="30" rows="5" className='border w-full' ></textarea>
                    </div>

                    <a 
                        href='#' 
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