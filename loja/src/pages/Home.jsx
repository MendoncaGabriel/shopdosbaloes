import Carousel from "../components/Carousel"
import Header from "../components/Header"
import Categories from "../components/Categories"
import Gallery from "../components/Gallery"

function Home(){
    return(
        <>
            <Header />
            <Carousel />
            <Categories />
            <Gallery title="Mais Vendidos" />
        </>
    )
}
export default Home