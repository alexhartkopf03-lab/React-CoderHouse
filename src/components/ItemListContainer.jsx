import { useState, useEffect } from "react";
import { fetchProductos } from "../asyncMock/data";
import ItemList from "./ItemList";

const ItemListContainer = ({ Saludo }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductos()
            .then((data) => setProductos(data))
            .catch((error) => console.log(error))
    }, []) //useEffect que se ejecuta una sola vez al montar el componente

    return (
        <div style={{padding:'10px'}}>
            <h1 style={{textAlign: "center"}}>{Saludo}</h1>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;