function FloatingButtons(){
    const whatsApp = {
        backgroundImage: 'url(./icones/whatsappColor.png)',
        backgroundPosition: 'center',
        backgroundSize: '125%',
        backgroundRepeat: 'no-repeat'
    }
    const instagram = {
        backgroundImage: 'url(./icones/instagramColor.jpg)',
        backgroundPosition: 'center',
        backgroundSize: '145%',
        backgroundRepeat: 'no-repeat'
    }

    const goToUp = {
        backgroundImage: 'url(./icones/GoToUp.png)',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }


    

    return(
        <>
            <div className="fixed grid grid-cols-1 gap-2 bottom-2 right-2 duration-200">
                <button onClick={()=>{  window.scrollTo({ top: 0, behavior: "smooth" })  }}  id="btnTop"  className="hidden">
                    <div className="w-10 h-10 rounded-full" style={goToUp}></div>
                </button>

                {
                    //Mostrar e esconder btn GO TO TOP
                    window.addEventListener('scroll', ()=>{
                        const currentScrollTop = document.documentElement.scrollTop;
                        const btnTop = document.getElementById('btnTop')

                        if (currentScrollTop > 0) {
                            btnTop.style.display = 'block'
                        }else{
                            btnTop.style.display = 'none'
                        }
                    })
                }


                <a href="#">
                    <div className=" w-10 h-10 rounded-full hover:scale-110 " style={instagram}></div>
                </a>
                <a href="#">
                    <div className=" w-10 h-10 rounded-full hover:scale-110 " style={whatsApp}></div>
                </a>
            </div>
        </>
    )


}
export default FloatingButtons