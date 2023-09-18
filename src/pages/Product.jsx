import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import CarouselProduct from '../components/CarouselProduct';
import FloatingButtons from '../components/FloatingButtons';
import DataBase from "../server/database"
import LogoBar from '../components/LogoBar';
import Footer from '../components/Footer';

function treatedWord(name){
  const treatedName = name.replace(/ /g, '-').toLowerCase();
  return treatedName
}

function Product() {
  const { nomeDoProduto } = useParams();



  // BUSCA EM "database.js" O PRODUTO DE ACORDO COM NOME TRATADO E RETORNA PARA A VARIAVAL "data"
  const data = DataBase.products.map((item)=>{
    if(treatedWord(item.name) == nomeDoProduto){
      return item
    }
  })

  //  PREÇO DO PRODUTO
  const price = Number(data[0].price);
  const priceValue = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

 
  
  
  
  return (
    <div>
      
      <FloatingButtons />
        <Header />
        <hr />
        <a href="/" className='bg-red-500 block text-center text-white font-semibold py-1'>Voltar a Home</a>

        {/* Imagens do produto */}
        <div className='flex overflow-x-auto snap-mandatory snap-x'>
          {data[0].img.map((item, index)=>{
            return <img key={index} src={item} alt="imagem do produto" className='aspect-square w-full object-cover snap-center flex-none'/>
          })}


        </div>



        <div className='p-2'>
          {/* Nome e preço */}
          <h2 className=' w-full text-gray-600 text-3xl font-semibold'>{data[0].name}</h2>
          <h2 className=' w-1/3 text-blue-500 font-semibold text-3xl'>{priceValue}</h2>

          {/* Variantes de tamanho */}
          <div className='p-5 flex overflow-x-auto space-x-2 snap-mandatory snap-x'>
            {data[0].variants[0].size.map((item, index)=>{
             return <div key={index} className='bg-blue-500 text-white flex items-center justify-center min-w-20 h-10 p-2 rounded-md flex-none snap-start'>{item}</div>
            })}
          </div>

          {/*Comprar ou add ao carrinho  */}
          <div className='p-2 space-y-4 my-5'>
            <a href='#' className='bg-black px-3 py-2 text-white rounded-md w-full block text-center text-xl'>Comprar agora</a>
            <a href='#' className='bg-blue-500 px-3 py-2 text-white rounded-md w-full block text-center text-xl'>Adicionar ao carrinho</a>
          </div>

          {/* Descrição */}
          <div className='my-5'>
            <h2 className='w-1/3 text-blue-500 font-semibold text-xl'>Descrição:</h2>
            <p className='text-gray-600'>
              {data[0].description}
            </p>
          </div>

          {/* Avaliar produto */}
          <div>
            <h2 className=' text-blue-500 font-semibold text-2xl'>Avalie este produto:</h2>
            <div className=' bg-yellow-50 p-5'>
                
              <img src="/public/icones/0star.png" alt="sistema de abaliação" className='w-full ' />
                
            </div>
          </div>

          {/* Mais produtos */}
          <div className='my-5'>
            <h2 className=' text-blue-500 font-semibold text-xl'>Veja tambem!:</h2>
            <CarouselProduct />
          </div>
        </div>

      <LogoBar />
      <Footer />
    </div>

  );
}

export default Product;
