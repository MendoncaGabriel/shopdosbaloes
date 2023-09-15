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

//ADICIONAR BOTÃO SAIBA MAIS NO WHATSAPP
function addButtonSaibaMais(){
    document.querySelectorAll('div .actions').forEach((e) => {
        const productContainer = e.parentElement.querySelector('.product-info');
        const productName = productContainer.querySelector('.product-name')?.innerText || 'Nome do Produto não encontrado';
        const productValue = productContainer.querySelector('.current-price')?.innerText || 'Valor do Produto não encontrado';
        const productLink = e.children[0].href || 'Link não encontrado';
      
        const mensagem = `Oi, tudo bem? Quero saber mais sobre o produto: ${productName}, Link: ${productLink} e Valor: ${productValue}`;
      
        const saibaMais = document.createElement('a');
        saibaMais.target = '_blank';
        saibaMais.href = `https://api.whatsapp.com/send?phone=5592992376689&text=${encodeURIComponent(mensagem)}`;
        saibaMais.style.display = 'flex';
        saibaMais.style.alignItems = 'center';
        saibaMais.style.justifyContent = 'center';
        saibaMais.style.width = '100%';
        saibaMais.style.height = '40px';
        saibaMais.style.backgroundColor = 'green';
        saibaMais.style.borderRadius = '4px';
        saibaMais.style.marginTop = '5px';
      
        const text = document.createElement('p');
        text.innerText = 'SAIBA MAIS';
        text.style.color = 'white';
        text.style.fontWeight = '700';
        text.style.fontSize = '12px';
      
        const img = document.createElement('img');
        img.src = 'https://mendoncagabriel.github.io/shopdosbaloes/icons/icons8-whatsapp-96.png';
        img.style.height = '60%';
        img.style.marginRight = '5px';
      
        saibaMais.appendChild(img);
        saibaMais.appendChild(text);
      
        e.appendChild(saibaMais);
    });
}

//SUBSTITUI O CARROSEL POR OUTRO
function addCarouselCustom(){
    //LOCAL DE INJEÇÃO
    let container;

    if(window.innerWidth > 720){
      container = document.querySelector('header');
    }else{
      container = document.querySelector('.bg')
    }
     
    

    //DESATIVAR BANNER PADRÃO
    let bannerHome = document.querySelector('.banner-home')
    if(bannerHome){
      bannerHome.style.display = 'none'
    }


    //CONTAINER MAIN
    let containerBanner = document.createElement('div');
    containerBanner.style.width = '100%';
    containerBanner.style.position = 'relative';
    containerBanner.style.overflow = 'hidden';
    containerBanner.style.height = '40vh'

    if(window.innerWidth < 720){
      containerBanner.style.height = '40vh'
    }else{
      containerBanner.style.height = '80vh';
    }
    

    //VOLTAR BTN
    let Voltar = document.createElement('button')
    Voltar.style.position = 'absolute'
    Voltar.style.transform = 'translate(0%, -50%)'
    Voltar.style.top = '50%'
    Voltar.style.left = '1%'
    Voltar.style.width = '50px'
    Voltar.style.height = '50px'
    Voltar.style.zIndex = '1'
    Voltar.style.backgroundColor = 'white'
    Voltar.style.border = 'none'
    Voltar.style.opacity = '0.7'
    Voltar.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/icons/btnPass.png)'
    Voltar.style.backgroundPositionX = 'center'
    Voltar.style.backgroundSize = 'cover'
    Voltar.style.transform = 'scaleX(-1)'
    Voltar.style.borderRadius = '4px'
    Voltar.onclick = voltar
    
    
    //PASSAR BTN
    let Passar = document.createElement('button')
    Passar.style.position = 'absolute'
    Passar.style.transform = 'translate(0%, -50%)'
    Passar.style.top = '50%'
    Passar.style.right = '1%'
    Passar.style.width = '50px'
    Passar.style.height = '50px'
    Passar.style.zIndex = '1'
    Passar.style.backgroundColor = 'white'
    Passar.style.border = 'none'
    Passar.style.opacity = '0.7'
    Passar.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/icons/btnPass.png)'
    Passar.style.backgroundPositionX = 'center'
    Passar.style.backgroundSize = 'cover'
    Passar.style.transform = 'scaleX(1)'
    Passar.style.borderRadius = '4px'
    Passar.onclick = passar
    

    //FUNÇÕES DE PASSAR E VOLTAR CAROUSEL SLIDE
    function passar() {
      currentIndex = (currentIndex + 1) % banners.length;
      updateBanners();
    }
    function voltar() {
      currentIndex = (currentIndex - 1 + banners.length) % banners.length;
      updateBanners();
    }


    //INJETAR ELEMENTOS NO CONTAINER MAIN
    containerBanner.appendChild(Voltar)
    containerBanner.appendChild(Passar)
    document.body.appendChild(containerBanner);
    

    //BANNERS
    let ContainerBanners = [
      'https://mendoncagabriel.github.io/shopdosbaloes/images/banner/Banner%20pc%20v2-min.png',
      'https://mendoncagabriel.github.io/shopdosbaloes/images/banner/Banner%20pc%20v2-min.png',
      'https://mendoncagabriel.github.io/shopdosbaloes/images/banner/Banner%20pc%20v2-min.png'
    ];
    

    //ADICIONAR BANNER
    let currentIndex = 0; 
    let banners = []; 
    function addBanner(imgs) {
      imgs.forEach((element, index) => {
        let banner = document.createElement('div');
        banner.style.width = '100%';
        banner.style.height = '100%';
        banner.style.transition = '700ms';
        banner.style.backgroundColor = 'gay';
        banner.style.position = 'absolute';
        banner.style.top = '0%';
        banner.style.backgroundImage = `url(${element})`;
        banner.style.backgroundPosition = 'center';
        banner.style.backgroundRepeat = 'no-repeat';
        banner.style.backgroundSize = 'cover';
        banner.style.left = index === 0 ? '0%' : '100%';
        banners.push(banner);
        containerBanner.appendChild(banner);
      });
    }


    function updateBanners() {
      for (let i = 0; i < banners.length; i++) {
        banners[i].style.left = (i - currentIndex) * 100 + '%';
      }
    }
    addBanner(ContainerBanners);
    
    container.insertAdjacentElement('afterend', containerBanner);

    //passar automatico
    setInterval(() => {
      passar()
    }, 5000);
}

function borderRadius(){
    let product = document.querySelectorAll('.product')
    if(product){
        product.forEach((e)=>{
            e.style.borderRadius = '8px'
        })
    }
}



addCarouselCustom()
zoomCorrection()
addComponnestButtonsFloat()
addButtonSaibaMais()
borderRadius()