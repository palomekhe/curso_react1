import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio'
import './styles/App.css'
import Tendencias from './pages/tendencias'
import ProductoDetalle from './pages/detalle_producto'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ofertas from './pages/ofertas'

function App() {

  return (
    <>
    <div className="app-container">
      <Header/>
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/tendencias" element={<Tendencias/>} />
          <Route path="/ofertas" element={<Ofertas/>} />
          <Route path="/productos/:id" element={<ProductoDetalle />} /> 
        </Routes>
      </main>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
