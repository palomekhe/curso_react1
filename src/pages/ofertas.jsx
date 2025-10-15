import { useEffect } from "react";
import { useState } from "react";
import "../styles/ofertas.css"
import ProductCard from "../components/ProductCard";

export default function Ofertas() {

    const [productos, setProductos] = useState([]);

    const ApiURL2 = 'https://68dea53dd7b591b4b790481a.mockapi.io/palomekhe/tendencias';
    useEffect( () => {
        fetch(ApiURL2)
            .then( (respuesta) => {
                if(!respuesta.ok){
                    throw new Error("Error de respuesta");
                }
                return respuesta.json();
            })
            .then( (datos) => {setProductos(datos)})
            .catch( (error) => {
                console.error("Se produjo un error al traer los datos", error);
            })
    },[])

    return (
        <div className="ofertas-page">
            <header className="ofertas-banner">
                <div className="banner-content">
                    <h1>OFERTAS IMPERDIBLES</h1>
                    <p>¡Hasta 50% OFF en productos seleccionados!</p>
                </div>
            </header>

            <section className="ofertas-flash">
                <h2>🔥 OFERTAS FLASH 🔥</h2>
                <div className="countdown-timer">
                    <div><span>1</span> Día</div> <div><span>08</span> Horas</div> <div><span>45</span> Minutos</div>
                </div>
            </section>

            <main className="ofertas-grid-container">
                <div className="product-grid">
                    {productos.map(productos => (
                        <ProductCard key={productos.id} producto={productos}/>
                    ))}
                </div>
            </main>
        </div>
    )
}