import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:nomeDoProduto" element={<Product />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
