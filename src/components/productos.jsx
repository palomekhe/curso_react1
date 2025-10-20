import { useState } from "react";
import { useEffect } from "react";
import '../styles/productos.css'
import { supabase } from "../APIs/supabaseClient";
import ProductCard from "./ProductCard";


export default function ProductosApiPro({agregarProducto}){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState();

    useEffect( ()=> {
        async function obtenerProductos(){
            try{
                const {data,error} = await supabase
                .from('productos')
                .select('*')
                if(error) throw error
                setProductos(data || []);
                setCargando(false);
            } catch(error){
                console.error("Se produjo un error al traer los datos", error);
            }
        }
        obtenerProductos();
    }, []);
    
    if(cargando) return <h2>Cargando productos...</h2>
    if(error) return <h3>{ error }</h3>

    return(
        <div>
            <h2 className="titulo">Productos</h2>
            <div className="product-grid">
                {
                productos.map( (producto) => (
                    <ProductCard key={producto.key} producto={producto}/>
                    ) )
                }
            </div>

            
        </div>
        
    )

}

