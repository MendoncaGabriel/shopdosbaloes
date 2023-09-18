import React, { useEffect, useState } from 'react';

function CartItem(){
    const [amount, setAmount] = useState(1);

    return(
        <>

            <div className=" grid grid-cols-4">
                <div className="">
                    <img 
                        src="https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67" 
                        alt="imagem produto carrinho" 
                        className="aspect-square rounded-lg w-20"
                    />
                </div>


                <div className=" col-span-2 text-gray-600 pl-1">
                    <h2>Nome do Produto</h2>
                    <h2>Tamanho x</h2>
                    <h2>R$9,99</h2>
                </div>

                {/* Quantidade */}
                <div className=" flex items-center justify-center">
                    <button onClick={()=>{setAmount(amount-1)}} className=" border-2 w-4 h-7 flex items-center justify-center rounded-full">-</button>
                    <input type="number" name="" id="" className=" w-9 h-5 p-1  text-center" value={amount} />
                    <button onClick={()=>{setAmount(amount+1)}} className=" border-black w-4 h-7 flex items-center justify-center rounded-full bg-black text-white pb-0">+</button>
                </div>


            </div>
        </>
    )
}
export default CartItem