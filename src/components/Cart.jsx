import CartItem from "./CartItem"
function Cart(){

    const cart = {
        width: '100%',
        height: '100%'
    } 
    return(
        <>
            <div 
                id="cart" 
                className="z-50 hidden border fixed top-0 left-1/2 transform -translate-x-1/2   bg-white rounded-md p-5 shadow-2xl" 
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

                    <CartItem />
                    <CartItem />
                    <CartItem />
   
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