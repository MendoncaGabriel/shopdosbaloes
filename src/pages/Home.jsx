import Carousel from "../components/Carousel"
import Header from "../components/Header"
import Categories from "../components/Categories"
import Gallery from "../components/Gallery"
import CarouselProduct from "../components/CarouselProduct"
import FloatingButtons from "../components/FloatingButtons"
import Banner from "../components/Banner"
import Brands from "../components/Brands"
import Newsletter from "../components/Newsletter"
import LogoBar from "../components/LogoBar"
import MakeBudget from "../components/MakeBudget"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
            <Header />
            <Carousel />
            <Categories />
            <CarouselProduct title="Novidades" />
            <Banner img="https://abrakadabra.vteximg.com.br/arquivos/ids/235923/banner_640x500_hotsite_infantil.jpg?v=637302549736800000"/>
            <Gallery title="Mais Vendidos" />
            <Banner img="https://media.istockphoto.com/id/1298151082/pt/vetorial/carnival-party-banner-invitation-card.jpg?s=1024x1024&w=is&k=20&c=L6Bi3BNeL6LYOHf9Z8PRC_md9mcudV0T6yOuINvK9TY=" />
            <FloatingButtons />
            <Brands />
            <Newsletter />
            <LogoBar />
            <MakeBudget />
            <Footer />



          

        </>
    )
}
export default Home