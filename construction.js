

let container = document.createElement('div')
// container.style.border = '2px solid gray'
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
// CCCarrosel.style.border = '2px solid red'
CCCarrosel.style.margin = 'auto'
CCCarrosel.style.width = '100%'
if(window.innerWidth <720){
  CCCarrosel.style.width = '100%'
}




let containerCarrosel = document.createElement('div')
// containerCarrosel.style.border = '2px solid gray';
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
  })
  item.addEventListener('mouseleave', ()=>{
    item.style.opacity = '0.5'
  })
    
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
prevButton.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/icons/btnPass.png)'

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
nextButton.style.backgroundImage = 'url(https://mendoncagabriel.github.io/shopdosbaloes/icons/btnPass.png)'

nextButton.addEventListener('click', () => scrollCarrossel('right'));

CCCarrosel.appendChild(prevButton);
CCCarrosel.appendChild(nextButton);

document.querySelector('main').appendChild(container)
