function LogoBar(){
    return(
        <>

        <div className="border-2 p-5">
            <img src="https://images.tcdn.com.br/img/img_prod/1238052/1692902488_logotipo_03.png" alt="logotipo"  />
            <h2 className="text-center font-bold text-blue-400 text-xl">Balões do tamanho da sua festa</h2>
            <p className="text-sm text-center">Agende seu arranjo de balões para sua festa!</p>

            <br />

            <h2 className="text-center text-blue-400 font-semibold ">Atendimento</h2>
            <div className="flex justify-around mt-5">
                <div className="flex items-center justify-center">
                    <img src="/icones/icons8-telefone-a-chamar-100.png" alt="" className="w-7 mr-2"/>
                    <a href="tel:+9232284328" className="font-semibold text-blue-400">92 3228-4328</a> 
                </div>
                <div className="flex items-center justify-center">
                    <img src="/icones/icons8-telefone-100.png" alt="" className="w-7 mr-2"/>
                    <a href="tel:+92992376689" className="font-semibold text-blue-400">92 99237-6689</a>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default LogoBar