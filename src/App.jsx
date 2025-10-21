import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio'
import './styles/App.css'
import Tendencias from './pages/tendencias'
import ProductoDetalle from './pages/detalle_producto'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ofertas from './pages/ofertas'
import { CarritoContext } from './context/CarritoContext'; 
import AlertaProductoAgregadoCarrito from './components/AlertaAgregarCarrito';
import { useContext } from 'react'

function App() {
  const { alerta } = useContext(CarritoContext);

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
      {alerta && <AlertaProductoAgregadoCarrito mensaje={alerta}/>}
    </div>
    </>
  )
}

export default App
