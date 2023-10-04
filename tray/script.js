function addComponnestButtonsFloat(){ //ADICIONAR COMPONENTE DE REDES SOCIAIS 
  var buttonsFloat = document.createElement('div')
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
    });
    button.addEventListener('mouseleave', ()=>{
      button.style.transform  = 'scale(1)'
    });
  };

  //HOVER CONTAINER
  buttonsFloat.addEventListener('mouseenter', ()=>{
    buttonsFloat.style.border = '2px solid #2196F3'
  });
  buttonsFloat.addEventListener('mouseleave', ()=>{
    buttonsFloat.style.border = ''
  });

  //VOLTAR AO TOPO
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
    });
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

        // Evite o comportamento padrão do botão (atualizar a página)
        button.addEventListener('click', function(event) {
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
    {
      img:'https://cdn-icons-png.flaticon.com/512/1828/1828630.png', 
      url:'' 
    },
    {
      img:'https://cdn-icons-png.flaticon.com/256/3670/3670051.png', 
      url:'https://api.whatsapp.com/send?phone=5592992376689'
    },
    {
      img:'https://img.freepik.com/premium-vector/gradient-social-media-logo_197792-2599.jpg', 
      url:'https://www.instagram.com/shopdosbaloes/', 
      size: 120 
    }
  ]
  addButtonsMedia(buttons)
  document.body.appendChild(buttonsFloat)
};
function zoomCorrection(){            //SOLUÇÃO ZOOM PRODUTO
  let zoomImg = document.querySelector('.zoomImg')
  let swiperLazy = document.querySelector('.swiper-lazy')
    
  if(zoomImg && swiperLazy){
    zoomImg.addEventListener('mouseenter', ()=>{
      zoomImg.style.transform  = 'scale(1.5)'
      swiperLazy.style.display = 'none'
    });
    
    zoomImg.addEventListener('mouseleave', ()=>{
      zoomImg.style.transform  = 'scale(1)'
      swiperLazy.style.display = 'block'
    });
  }
};
function addButtonSaibaMais(){        //ADICIONAR BOTÃO SAIBA MAIS NO WHATSAPP
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
};
function addCarouselCustom(){         //SUBSTITUI O CARROSEL POR OUTRO
  if(document.location.href == 'http://www.shopdosbaloes.com.br/' || document.location.href == 'https://www.shopdosbaloes.com.br/'){

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
    if(window.innerWidth < 720){containerBanner.style.height = '25vh'}
    else{containerBanner.style.height = '80vh';}

    //VOLTAR BTN
    let Voltar = document.createElement('button')
    Voltar.style.position = 'absolute'
    Voltar.style.transform = 'translate(0%, -50%) scaleX(-1)'
    Voltar.style.top = '50%'
    Voltar.style.left = '1%'
    Voltar.style.width = '50px'
    Voltar.style.height = '50px'
    Voltar.style.zIndex = '1'
    Voltar.style.backgroundColor = 'white'
    Voltar.style.border = 'none'
    Voltar.style.opacity = '0.7'
    Voltar.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/tray/icons/btnPass.png)'
    Voltar.style.backgroundPositionX = 'center'
    Voltar.style.backgroundSize = 'cover'
    Voltar.style.borderRadius = '4px'
    Voltar.onclick = voltar
    
    //PASSAR BTN
    let Passar = document.createElement('button')
    Passar.style.position = 'absolute'
    Passar.style.transform = 'translate(0%, -50%) scaleX(1'
    Passar.style.top = '50%'
    Passar.style.right = '1%'
    Passar.style.width = '50px'
    Passar.style.height = '50px'
    Passar.style.zIndex = '1'
    Passar.style.backgroundColor = 'white'
    Passar.style.border = 'none'
    Passar.style.opacity = '0.7'
    Passar.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/tray/icons/btnPass.png)'
    Passar.style.backgroundPositionX = 'center'
    Passar.style.backgroundSize = 'cover'
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
        banner.style.backgroundSize = '100%';
        banner.style.left = index === 0 ? '0%' : '100%';
        banners.push(banner);
        containerBanner.appendChild(banner);
      });
    };


    function updateBanners() {
      for (let i = 0; i < banners.length; i++) {
        banners[i].style.left = (i - currentIndex) * 100 + '%';
      }
    };

    addBanner(ContainerBanners);
    container.insertAdjacentElement('afterend', containerBanner);

    //passar automatico
    setInterval(() => {
      passar()
    }, 20000);
  }
  
};
function borderRadius(){              //DEIXAR BORDAS ARREDONDADAS
  let product = document.querySelectorAll('.product')
  if(product){
    product.forEach((e)=>{
      e.style.borderRadius = '8px'
    });
  };
};
function addComponenteMarcas(){       //ADICIONAR COMPONENTE CAROSELL MARCAS
  let container = document.createElement('div')
  container.style.width = '100%'
  container.style.paddingTop = '10px'
  container.style.paddingBottom = '10px'
  container.style.marginTop = '10px'
  container.style.marginBottom = '10px'
  container.style.maxWidth = '1210px'
  container.style.margin = 'auto'

  let h2 = document.createElement('h2')
  h2.innerText = 'Marcas'
  h2.style.fontFamily = 'arial, montserrat'
  h2.style.textAlign = 'center'
  container.appendChild(h2)

  let hr = document.createElement('hr')
  hr.style.width = '100%'
  hr.style.margin = 'auto'
  hr.style.color = 'gray'
  hr.style.marginBottom = '10px'
  container.appendChild(hr)

  let CCCarrosel = document.createElement('div')
  CCCarrosel.style.position = 'relative'
  CCCarrosel.style.margin = 'auto'
  CCCarrosel.style.width = '100%'

  if(window.innerWidth <720){
    CCCarrosel.style.width = '100%'
  }

  let containerCarrosel = document.createElement('div')
  containerCarrosel.style.width = '100%';
  containerCarrosel.style.overflowX = 'hidden';
  containerCarrosel.style.whiteSpace = 'nowrap';
  containerCarrosel.style.width = '90%'

  if(window.innerWidth <720){
    containerCarrosel.style.width = '70%'
  }

  containerCarrosel.style.margin = 'auto'
  containerCarrosel.style.paddingTop = '10px'
  containerCarrosel.style.paddingBottom = '10px'

  CCCarrosel.appendChild(containerCarrosel)
  container.appendChild(CCCarrosel)


  const marcasImgs = [
    
    {
      img: 'https://yt3.googleusercontent.com/ytc/AOPolaRIK3refq6Kt0pcLPz0zR0yPb_TCvti7HoBDP5L=s900-c-k-c0x00ffffff-no-rj',
      url: 'http://www.shopdosbaloes.com.br/marcas/pic-pic'
    },
    {
      img: 'https://baloessaoroque.com.br/wp-content/uploads/2020/11/logo.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/sao-roque'
    },
    {
      img: 'https://www.festcolor.com.br/static/images/logo-festcolor.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/fest-color'
    },
    {
      img: 'https://img.elo7.com.br/product/zoom/3A1E403/pacote-balao-branco-n-9-50-unidades-art-latex-bexigas-brancos-art-latex.jpg',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://baloesjoy.com.br/wp-content/uploads/2022/06/logo-joy.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://yt3.googleusercontent.com/ytc/AOPolaRLgeq-QOb5GtXR2WIU3zq7ri5zfKaGk78BRnrR=s900-c-k-c0x00ffffff-no-rj',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://baloesfestball.com.br/web/img/logo.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://diskempresarial.com.br/img/produtos/zoom/1565807613f05cdfc3b6b43c54b3cfc75242b65b3f.jpg',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://scontent.fpll5-1.fna.fbcdn.net/v/t39.30808-6/326344835_721177849628699_305930153760403698_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFgvG0KttJxwzomNu6_GoYezaZYT41A3u_NplhPjUDe71Ud8DS00MmHT9AjQx1jgK0N_M5au1kgc3G-BHd8NS7T&_nc_ohc=ekKGPtqeLa4AX9Y49Dp&_nc_ht=scontent.fpll5-1.fna&oh=00_AfDUwg9RCOaLqiIzZWjbAQQQd2ADG-K3b0ALJ1lxj-Lzgw&oe=6508B81A',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://seeklogo.com//images/S/sempertex-logo-743D32B199-seeklogo.com.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://pontodasfestas.com.br/wp-content/uploads/2023/04/Logo-Fox-import-hr.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://funchalpapeis.cdn.plataformaneo.com.br/produto/78920210511401_78920210511401.JPG',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://www.produtosmakemais.com.br/make/wp-content/themes/Make/images/logo-make.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://rhegia.com.br/wp-content/uploads/2021/03/mac.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://scontent.fpll5-1.fna.fbcdn.net/v/t39.30808-6/311142047_515780363891232_6888447216743803146_n.png?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEYPiTOch8Ze1kGx55NGh_l7qGv-2sDHujuoa_7awMe6HJ79UTQbYTObdVCTj3O1EBSy_9D4K3Fa1lCebg_FIW_&_nc_ohc=4sLLNZjeL20AX8mVV-A&_nc_ht=scontent.fpll5-1.fna&oh=00_AfAQNdAtKDfAmMvlCQGfzD6u7yYy-p14uLf4oERP1DiAaw&oe=650906CD',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://scontent.fpll5-1.fna.fbcdn.net/v/t39.30808-6/308663825_528233512639642_8925920543360737427_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGKdnGaiDXO8pUM_ar8F3gQ8IA5f3OO-gTwgDl_c476BLmNfVDMZpgpskiiH4DR5X8qKrKBiCRCW8_EIHu2DbME&_nc_ohc=9jqV8JgqtTwAX_UUOQG&_nc_ht=scontent.fpll5-1.fna&oh=00_AfDcnYlKZZdDTGLk8FUielfZzQSCkdu5DsZANeF17nle4A&oe=6508A7E4',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://yt3.googleusercontent.com/a6D4tzOSCRw5OYL5G1dRiJajlZ_cVjVJ7B4mncq5hDYmxbkBBwDo9L-fLZo6qNXEms6cUoKPRw=s900-c-k-c0x00ffffff-no-rj',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'https://static.wixstatic.com/media/99b010_640e9e9c3f514128a81953a6ec033d27~mv2.jpg/v1/fit/w_2500,h_1330,al_c/99b010_640e9e9c3f514128a81953a6ec033d27~mv2.jpg',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
    {
      img: 'http://silverplastic.com.br/wp-content/themes/default/img/home/logo-party-box.png',
      url: 'http://www.shopdosbaloes.com.br/marcas/'
    },
  ]

  marcasImgs.forEach((e)=>{
    let item = document.createElement('a')
    item.style.display = 'inline-block'
    item.style.width = '100px'
    item.style.height = '100px'
    item.style.borderRadius = '8px'
    item.style.backgroundColor = 'white'
    item.style.backgroundImage = `url(${e.img})`
    item.href = e.url
    item.style.backgroundPosition = 'center'
    item.style.backgroundSize = '80%'
    item.style.backgroundRepeat = 'no-repeat'
    item.style.marginLeft = '10px'
    item.style.marginRight = '10px'
    item.style.opacity = '0.5'

    if(window.innerWidth <720){
      item.style.opacity = '1'
    }

    item.addEventListener('mouseenter', ()=>{
      item.style.opacity = '1'
    });
    item.addEventListener('mouseleave', ()=>{
      item.style.opacity = '0.5'
    });
    
    containerCarrosel.appendChild(item)
  })
  
  let scrollX = 0;
  function scrollCarrossel(direction) {
    const carrosselWidth = containerCarrosel.scrollWidth - containerCarrosel.clientWidth;
    
    if (direction === 'left' && scrollX > 0) {
      scrollX -= 200; // Ajuste a quantidade que deseja rolar
    } else if (direction === 'right' && scrollX < carrosselWidth) {
      scrollX += 200; // Ajuste a quantidade que deseja rolar
    }
    
    containerCarrosel.scrollTo({
      left: scrollX,
      behavior: 'smooth'
    });
  }

  const prevButton = document.createElement('button');
  prevButton.style.borderRadius = '50%'
  prevButton.style.border = 'none'
  prevButton.style.position = 'absolute'
  prevButton.style.transform = 'translate(0%, -50%) scaleX(-1)'
  prevButton.style.top = '50%'
  prevButton.style.left = '0px'
  prevButton.style.width = '50px'
  prevButton.style.height = '50px'
  prevButton.style.backgroundPosition = 'center'
  prevButton.style.backgroundRepeat = 'no-repeat'
  prevButton.style.backgroundSize = '80%'
  prevButton.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/tray/icons/btnPass.png)'
  prevButton.addEventListener('click', () => scrollCarrossel('left'));

  const nextButton = document.createElement('button');
  nextButton.style.borderRadius = '50%'
  nextButton.style.border = 'none'
  nextButton.style.position = 'absolute'
  nextButton.style.transform = 'translate(0%, -50%)'
  nextButton.style.top = '50%'
  nextButton.style.right = '0px'
  nextButton.style.width = '50px'
  nextButton.style.height = '50px'
  nextButton.style.backgroundPosition = 'center'
  nextButton.style.backgroundRepeat = 'no-repeat'
  nextButton.style.backgroundSize = '80%'
  nextButton.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/tray/icons/btnPass.png)'

  nextButton.addEventListener('click', () => scrollCarrossel('right'));
  CCCarrosel.appendChild(prevButton);
  CCCarrosel.appendChild(nextButton);
  document.querySelector('main').appendChild(container)
};

addCarouselCustom(); zoomCorrection(); addComponnestButtonsFloat(); addButtonSaibaMais(); borderRadius(); addComponenteMarcas()