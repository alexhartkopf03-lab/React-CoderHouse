import { useState, useEffect } from "react";
import { fetchProductos } from "../asyncMock/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ Saludo }) => {

    const [productos, setProductos] = useState([])
    const {tipo} = useParams()

    useEffect(() => {
        fetchProductos()
            .then((data) => {
                if (tipo){
                    setProductos(data.filter((prod) => prod.categoria === tipo))
                }else{
                    setProductos(data)
                }
            })
            .catch((error) => console.log(error))
    }, [tipo]) //useEffect que se ejecuta una sola vez al montar el componente y esta a la escucha de tipo

    return (
        <>
            <h1 className="titulo">{Saludo} {tipo && <span>{tipo}</span>}</h1>
            <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;