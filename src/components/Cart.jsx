function Cart(){
    const cart = {
        width: '95%',
        height: '95vh'
    } 
    return(
        <>
            <div 
                id="cart" 
                className="z-50 hidden border fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-md p-5 shadow-2xl" 
                style={cart}
            >
           
                <button 
                    onClick={()=>{document.getElementById('cart').style.display = 'none'}} 
                    className="ml-auto block   w-8 h-8 rounded-xl bg-red-500 text-red-100 text-2xl font-semibold leading-none"
                >x</button>
                
                <h2 className="text-2xl font-semibold text-gray-600">Meu carrinho</h2>
                <hr />

                {/* Itens do carrinho */}
                <div className=" py-5 space-y-5">

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

                        <div className=" flex items-center justify-center">
                            <button className=" border-2 w-4 h-7 flex items-center justify-center rounded-full">-</button>
                            <input type="number" name="" id="" className=" w-9 h-5 p-1" />
                            <button className=" border-black w-4 h-7 flex items-center justify-center rounded-full bg-black text-white pb-0">+</button>
                        </div>


                    </div>
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

                        <div className=" flex items-center justify-center">
                            <button className=" border-2 w-4 h-7 flex items-center justify-center rounded-full">-</button>
                            <input type="number" name="" id="" className=" w-9 h-5 p-1" />
                            <button className=" border-black w-4 h-7 flex items-center justify-center rounded-full bg-black text-white pb-0">+</button>
                        </div>


                    </div>
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

                        <div className=" flex items-center justify-center">
                            <button className=" border-2 w-4 h-7 flex items-center justify-center rounded-full">-</button>
                            <input type="number" name="" id="" className=" w-9 h-5 p-1" />
                            <button className=" border-black w-4 h-7 flex items-center justify-center rounded-full bg-black text-white pb-0">+</button>
                        </div>


                    </div>
                </div>


                <div className="flex justify-between border-b-2 mt-5">
                    <h2>Total</h2>
                    <p>R$9,99</p>
                </div>

                <button className="bg-blue-500 py-2 rounded-md text-white font-semibold w-full my-5">
                    Finalizar compra
                </button>

                <img src="/public/img/compra-segura.png" alt="compra segura" className=" w-full"/>
            </div>

            
        </>
    )
}
export default Cart