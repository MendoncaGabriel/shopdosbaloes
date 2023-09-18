function Newsletter(){
    return(
        <>
            <div className=" w-full bg-blue-500 p-5 text-white ">
                <h2 className="font-bold text-lg">Nossas Redes Sociais</h2>

                <div className="w-full h-10 mb-3 flex items-center " >
                    <img src="/icones/icons8-facebook-100.png" alt="redes sociais"  className="h-full"/>
                    <img src="/icones/icons8-instagram-100.png" alt="redes sociais"  className="h-full"/>
                </div>

                <p className="text-center ">Siga nosso perfil no Instagram</p>
                <p className="text-center font-bold text-lg mb-3">@shopdosbaloes</p>

                <h2 className="font-bold text-lg">Cadastre-se em nossa newsletter</h2>
                <p>e receba novas melhores promoções</p>

                <div className="flex justify-center items-center  mt-5">
                    <input type="text" placeholder="Didite seu e-mail" className="h-10 w-full px-3 text-gray-600"/>
                    <button className="px-3 py-2 bg-blue-200 text-blue-500">Cadastrar</button>
                </div>

            </div>
        </>
    )
}
export default Newsletter