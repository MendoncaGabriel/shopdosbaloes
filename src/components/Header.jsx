
function Header(){

    const menu = {
        // local: não funciona
        backgroundImage: "url(./icones/menu.png)", 
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const user = {
        // local: não funciona
        backgroundImage: 'url(./icones/user.png)',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const card = {
        // local: funciona
        backgroundImage: 'url(./icones/car.png)',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const bloom = {
        backgroundImage: 'url(./icones/bloom.png)',
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    let locationDropOpen = false
    function dropDownLocation(){
        if(locationDropOpen == false){
            locationDropOpen = true
            document.getElementById('itensDrowpDown').style.display = 'block'
        }else{
            locationDropOpen = false
            document.getElementById('itensDrowpDown').style.display = 'none'
        }
    }

    return(
        <>
            <div className="bg-red-600 h-auto w-full pt-2">
                <div className="flex items-center justify-between">
                    <div className="flex w-1/2 justify-around items-center">
                        {/* menu */}
                        <button  className="w-10 h-10 bg-center cursor-pointer" style={menu}></button>

                        {/* logo */}
                        <img src="https://images.tcdn.com.br/img/img_prod/1238052/1692902488_logotipo_03.png" alt="logo"  className="w-36 "/>
                    </div>

                    <div className="flex w-1/3 justify-around items-center">
                        <a href="/usuario" className="w-10 h-10 cursor-pointer" style={user}></a>
                        <a href="/carrinho" className="w-10 h-10 cursor-pointer" style={card}></a>
                    </div>
                </div>


                {/* pesquisa */}
                <div className=" py-2 px-5 ">
                    <div className="flex items-center justify-center  w-full  relative m-auto">
                        <input type="text" className="bg-white w-full h-10 rounded-md pl-2 text-gray-600" placeholder="Pesquisar..."/>
                        <button className="w-10 h-10  rounded-md bg-blue-500 absolute right-0" style={bloom}></button>
                    </div>
                </div>


                {/* localização */}
                <div className="w-full h-14 bg-red-500  flex items-center px-5">


                    <div className="relative">
                        <div className="flex items-center justify-center space-x-2">
                            <span><img src="./icones/location.png" alt="icone location" className="w-3 " /></span>
                            <button className="text-white" onClick={()=>{dropDownLocation()}}>
                            Selecione o endereço 
                            </button>
                        </div>
        

                        <ul id="itensDrowpDown" className="absolute hidden bg-white p-3 rounded-md border text-gray-600" >
                            <li><a  href="#">Birro 1</a></li>
                            <li><a  href="#">Birro 2</a></li>
                            <li><a  href="#">Birro 3</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Header