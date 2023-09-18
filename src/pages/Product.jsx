import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CarouselProduct from '../components/CarouselProduct';

function Product() {
  const { nomeDoProduto } = useParams();

  return (
    <div>
      {/* <p>Nome do Produto: {nomeDoProduto}</p> */}
        <Header />
        <img 
          src="https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67" 
          alt="imagem do produto" 
          className='aspect-square w-full object-cover'
        />
        <div className='p-2'>
          <h2 className=' w-full text-gray-600 text-3xl font-semibold'>Nome do produto</h2>
          <h2 className=' w-1/3 text-gray-600 font-semibold text-3xl'>R$9,99</h2>

          <div className='p-5 flex overflow-x-auto space-x-2 snap-mandatory snap-x'>
            <div className='bg-blue-500 text-white flex items-center justify-center w-20 h-10 p-2 rounded-md flex-none snap-start'>5"-xcm</div>
            <div className='bg-blue-500 text-white flex items-center justify-center w-20 h-10 p-2 rounded-md flex-none snap-start'>5"-xcm</div>
            <div className='bg-blue-500 text-white flex items-center justify-center w-20 h-10 p-2 rounded-md flex-none snap-start'>5"-xcm</div>
            <div className='bg-blue-500 text-white flex items-center justify-center w-20 h-10 p-2 rounded-md flex-none snap-start'>5"-xcm</div>
            <div className='bg-blue-500 text-white flex items-center justify-center w-20 h-10 p-2 rounded-md flex-none snap-start'>5"-xcm</div>
            <div className='bg-blue-500 text-white flex items-center justify-center w-20 h-10 p-2 rounded-md flex-none snap-start'>5"-xcm</div>
          </div>

          <div className=''>
            <h2 className='w-1/3 text-blue-500 font-semibold text-xl'>Descrição:</h2>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid dignissimos odit exercitationem. Magni, itaque. Velit modi pariatur recusandae itaque nesciunt accusamus impedit, voluptatibus unde totam ea amet, quae incidunt!
            </p>
          </div>

          <div className='p-2 space-y-4 my-5'>
            <button className='bg-black px-3 py-2 text-white rounded-md w-full'>Comprar agora</button>
            <button className='bg-blue-500 px-3 py-2 text-white rounded-md w-full'>Adicionar ao carrinho</button>
          </div>


          <div>
            <h2 className=' text-blue-500 font-semibold text-2xl'>Avalie este produto:</h2>
            <div className=' bg-yellow-100 p-5'>
                
              <img src="/public/icones/0star.png" alt="sistema de abaliação" className='w-full ' />
                  
               
               
            </div>
          </div>

          <CarouselProduct />




        </div>

      
      
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
    </div>

  );
}

export default Product;
