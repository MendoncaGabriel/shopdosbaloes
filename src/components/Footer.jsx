function Footer(){
    return(
        <>
            <div className=" p-5">
                <h2 className="text-2xl font-semibold text-blue-500">Institucional</h2>

                <ul className="space-y-3 text-gray-600 text-lg mt-5">
                    <li><a href="/sobre-a-empresa">Sobre a empresa</a></li>
                    <li><a href="/como-comprar">Como comprar</a></li>
                    <li><a href="/segurança">Segurança</a></li>
                    <li><a href="/envio">Envio</a></li>
                    <li><a href="/pagamento">Pagamento</a></li>
                    <li><a href="/garantia">Tempo de Garantia</a></li>
                    <li><a href="/noticias">Notícias</a></li>
                    <li><a href="/trocas-e-devolucoes">Trocas e devoluções</a></li>
                    <li><a href="/fale-conosco">Fale Conosco</a></li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 mt-7 mb-2">Formas de pagamento</h2>
                <img src="/public/img/formas-de-pagamento.png" alt="formas de pagamento" className="w-full" />

                <h2 className="text-2xl font-semibold text-blue-500 mt-7 mb-2">Selo de Segurança</h2>
                <img src="/public/img/selo-de-segurança.png" alt="formas de pagamento" className="w-1/2" />


                
            </div>
            <div className="bg-blue-400 p-2">
                <p className="text-white text-center">&copy; 09/2023 Shop dos Balões - Todos os direitos reservados.</p>
            </div>
        </>
    )
}

export default Footer