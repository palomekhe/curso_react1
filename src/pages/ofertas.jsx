import { useEffect } from "react";
import { useState } from "react";
import "../styles/ofertas.css"
import ProductCard from "../components/ProductCard";
import { supabase } from "../APIs/supabaseClient";

export default function Ofertas() {

    const [productos, setProductos] = useState([]);


    useEffect( () => {
        async function obtenerProductosEnOferta() {
            try{
                const {data , error} = await supabase
                .from('productos')
                .select('*')
                .eq('en_oferta', true);
                if(error) throw error;
                setProductos(data || []);
            } catch (error){
                console.error("Se produjo un error al traer los datos", error);
            }
        }
        obtenerProductosEnOferta();
    },[]);

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
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                        ))
                    ) : (
                        <p>No hay productos disponibles por el momento.</p>
                    )}
                </div>
            </main>
        </div>
    )
}