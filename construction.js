
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
        banner.style.backgroundColor = 'blue';
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
}addCarouselCustom()



