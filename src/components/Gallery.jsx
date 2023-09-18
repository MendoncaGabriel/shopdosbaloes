import ProductItem from "./ProductItem"

function Gallery({title}){
    const itens = [
        '', '', '',
        '', '', '',
        '', '', 
    ]
    return(
        <>
            <div className="border p-2">
                <h2 className="font-semibold text-blue-500">{title}</h2>

                <div className=" grid grid-cols-2 gap-2">

                    {
                       
                        itens.map((item, index)=>(
                            <ProductItem
                                width='full'
                                key={index} 
                                img="https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67" 
                                name='Nome do produto'
                                price='9,99'
                            />
                        ))
                        
                    }
                    
                </div>
            </div>
        </>
    )
}
export default Gallery