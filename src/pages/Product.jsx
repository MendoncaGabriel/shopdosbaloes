import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function Product() {
  const { nomeDoProduto } = useParams();

  return (
    <div>
        <Header />
      
      {/* <p>Nome do Produto: {nomeDoProduto}</p> */}
      
    </div>
  );
}

export default Product;
