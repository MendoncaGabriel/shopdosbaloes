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
                    className="ml-auto block   w-10 h-10 rounded-xl bg-red-500 text-red-100 text-3xl font-semibold pb-2"
                >x</button>
                
                <h2 className="text-2xl font-semibold text-gray-600">Carrinho</h2>
            </div>
        </>
    )
}
export default Cart