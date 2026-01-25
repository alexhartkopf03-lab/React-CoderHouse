import { useState, useEffect } from "react";
import { fetchProductos } from "../asyncMock/data";

const ItemListContainer = ({ Saludo }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductos()
            .then((data) => setProductos(data))
            .catch((error) => console.log(error))
    }, []) //useEffect que se ejecuta una sola vez al montar el componente

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{Saludo}</h1>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {productos.map((producto) => (
                    <div key={producto.id} style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "200px", textAlign: "center" }}>
                        <img src={producto.imagen} alt={producto.nombre} style={{ width: "100px", height: "100px" }} />
                        <p>{producto.nombre}</p>
                        <p>{producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;