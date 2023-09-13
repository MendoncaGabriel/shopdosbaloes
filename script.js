//ADICIONAR COMPONENTE DE REDES SOCIAIS
function addComponnestButtonsFloat(){
    //CONTAINER
    var buttonsFloat = document.createElement('div')
    buttonsFloat.style.border = '2px solid #2196F3'
    buttonsFloat.style.position = 'fixed'
    buttonsFloat.style.transform = 'translate(0%, -50%)'
    buttonsFloat.style.top = '50%'
    buttonsFloat.style.right = '20px'
    buttonsFloat.style.display = 'flex'
    buttonsFloat.style.flexDirection = 'column'
    buttonsFloat.style.justifyContent = 'space-around'
    buttonsFloat.style.padding = '5px'
    buttonsFloat.style.paddingTop = '10px'
    buttonsFloat.style.paddingBottom = '10px'
    buttonsFloat.style.gap = '10px'
    buttonsFloat.style.borderRadius = '40px'
    buttonsFloat.style.backgroundColor = 'white'
    buttonsFloat.style.zIndex = "9999";


    //HOVER
    function hoverButton(button){
        button.addEventListener('mouseenter', ()=>{
            button.style.transform  = 'scale(1.1)'
        })
        button.addEventListener('mouseleave', ()=>{
            button.style.transform  = 'scale(1)'
        })
    }


    //BOLTAR AO TOPO
    function backToTop(button){
        button.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        //SCROLL DETECT
        window.addEventListener('scroll', ()=>{
            const currentScrollTop = document.documentElement.scrollTop;
            if (currentScrollTop > 0) {
                button.style.display = 'block'
            }else{
                button.style.display = 'none'
            }
            previousScrollTop = currentScrollTop;
        })
    }


    //ESTILO DOS BOTÕES
    let cont = 0
    function addButtonsMedia(props){


        props.forEach((element)=>{
            let button = document.createElement('a')
            button.style.backgroundImage = `url(${element.img})`
            button.href = element.url

            if(window.innerWidth >720){
                button.style.width = '50px'
                button.style.height = '50px'
            }else{
                button.style.width = '40px'
                button.style.height = '40px'

                buttonsFloat.style.border = 'none'
                buttonsFloat.style.right = '10px'
                
            }

            button.style.backgroundRepeat = 'no-repeat'
            button.style.backgroundPosition = 'center'
            button.style.backgroundSize = 'cover'
            button.style.borderRadius = '50%'
            button.style.transition = '200ms'
            button.style.cursor = 'pointer'
            


            if(element.size){
                button.style.backgroundSize = element.size + '%'
            }
        
            //identificar e adicionar btn topo
            if(cont == 0){
                backToTop(button)
                button.style.display = 'none'
                cont++

                button.addEventListener('click', function(event) {
                    // Evite o comportamento padrão do botão (atualizar a página)
                    event.preventDefault();

                });
            }else{
                button.target = '_blank';

            }
            //adicionar hover
            hoverButton(button)
            buttonsFloat.appendChild(button)
        })
    }


    let buttons = [
        {img:'https://cdn-icons-png.flaticon.com/512/1828/1828630.png', url:'' },
        {img:'https://cdn-icons-png.flaticon.com/256/3670/3670051.png', url:'https://api.whatsapp.com/send?phone=5592992376689' },
        {img:'https://img.freepik.com/premium-vector/gradient-social-media-logo_197792-2599.jpg', url:'https://www.instagram.com/shopdosbaloes/', size: 120 }
    ]
    addButtonsMedia(buttons)


    document.body.appendChild(buttonsFloat)

}


//SOLUÇÃO ZOOM PRODUTO
function zoomCorrection(){
    let zoomImg = document.querySelector('.zoomImg')
    let swiperLazy = document.querySelector('.swiper-lazy')
    
    if(zoomImg && swiperLazy){
      zoomImg.addEventListener('mouseenter', ()=>{
        zoomImg.style.transform  = 'scale(1.5)'
        swiperLazy.style.display = 'none'
      })
      
      zoomImg.addEventListener('mouseleave', ()=>{
        zoomImg.style.transform  = 'scale(1)'
        swiperLazy.style.display = 'block'
      })
    }
}

zoomCorrection()
addComponnestButtonsFloat()