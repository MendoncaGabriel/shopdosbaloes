function Product({img, name, price, width}){
    return(
        <>
            <div  className={`border rounded-md flex-none scroll-snap-align snap-center ${width === 'full' ? 'w-full' : 'w-1/2'}`} >
                <img src={img} alt="" />
                <div className="bg-yellow-100">
                    estrelas
                </div>
                <div className="p-2">
                    <h2 className="text-gray-700 font-semibold">{name}</h2>
                    <h2 className="text-blue-500 font-bold text-xl">R${price}</h2>

                    <div className="space-y-2 mt-5">
                        <div className="bg-green-100 flex items-center justify-center space-x-2 p-2 rounded-md">
                            <img src="./src/assets/whatsapp.png" alt="icone do whatsapp" className="w-7" />
                            <h2 className="text-green-800 font-bold">Saber Mais</h2>
                        </div>
                        <div className="bg-blue-800 flex items-center justify-center space-x-2 p-2 rounded-md">
                            <img src="./src/assets/car.png" alt="icone do whatsapp" className="w-7" />
                            <h2 className="text-white font-bold">Comprar</h2>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Product