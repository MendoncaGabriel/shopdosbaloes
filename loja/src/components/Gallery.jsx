function Gallery({title}){
    const itens = [
        '', '', '',
        '', '', '',
        '', '', 
    ]
    return(
        <>
            <div className="border p-2">
                <h2 className="font-semibold text-blue-500">{title}</h2>

                <div className=" grid grid-cols-2 gap-2">

                    {
                        itens.map(()=>(
                            <div className="border rounded-md">
                            <img src="https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67" alt="" />
                            <div className="bg-yellow-100">
                                estrelas
                            </div>
                            <div className="p-2">
                                <h2 className="text-gray-700 font-semibold">Nome do produto</h2>
                                <h2 className="text-blue-500 font-bold text-xl">R$9,99</h2>

                                <div className="space-y-2">
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
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}
export default Gallery