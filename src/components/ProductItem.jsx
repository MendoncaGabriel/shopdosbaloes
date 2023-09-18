function ProductItem({img, name, price, width, url}){
    const mensagem = `Oi, tudo bem? Quero saber mais sobre o produto: ${name}, Link: ${url} e Valor: R$${price}`
    const goZap = `https://api.whatsapp.com/send?phone=5592992376689&text=${mensagem}`
    const treatedName = name.replace(/ /g, '-').toLowerCase();

    return(
        <>
            <div  className={`border rounded-md flex-none scroll-snap-align snap-center ${width === 'full' ? 'w-full' : 'w-1/2'} sm:w-full`} >
                <a href={'/produto/' + treatedName}>
                    <img src={img} alt="imagem produto" />
                    <img src="/icones/2star.png" className="w-4/5 p-2" />

                    <div className=" p-2">
                        <h2 className="text-gray-700 font-semibold">{name}</h2>
                        <h2 className="text-blue-800 font-bold text-xl">R${price}</h2>
                    </div>

                </a>

                <div className="p-2 ">
                    <div className="space-y-2">

                        <a href={goZap} target="_blank" className="bg-green-100 flex items-center justify-center space-x-2 py-1 rounded-sm">
                            <img src="/icones/whatsapp.png" alt="icone do whatsapp" className="w-7" />
                            <h2 className="text-green-800 font-bold">Saber Mais</h2>
                        </a>
                        <a href={'/produto/' + treatedName} className="bg-blue-800 flex items-center justify-center space-x-2 py-1 rounded-sm">
                            <img src="/icones/car.png" alt="icone do whatsapp" className="w-7" />
                            <h2 className="text-white font-bold">Comprar</h2>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ProductItem