import Carousel from "../components/Carousel"
import Header from "../components/Header"
import Categories from "../components/Categories"
import Gallery from "../components/Gallery"
import CarouselProduct from "../components/CarouselProduct"
import FloatingButtons from "../components/FloatingButtons"


function Home(){
    return(
        <>
            <Header />
            <Carousel />
            <Categories />
            <CarouselProduct title="Novidades" />
            <Gallery title="Mais Vendidos" />
            <FloatingButtons />
        </>
    )
}
export default Home