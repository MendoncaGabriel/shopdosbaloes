function Banner({img}){
    return(
        <>
            <img src={img} className="w-full h-60  object-cover  py-3" />

            <div 
                className="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out md:relative md:left-auto md:w-auto md:top-auto md:transition-none md:duration-0 md:ease-none" 
                id="divPresa"
            ></div>


        </>
    )
}

export default Banner