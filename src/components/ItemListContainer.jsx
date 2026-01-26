import { useState, useEffect } from "react";
import { fetchProductos } from "../asyncMock/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SpinnerLoad from "./SpinnerLoad";

const ItemListContainer = ({ Saludo }) => {

    const [productos, setProductos] = useState([])
    const [spinner, setSpinner] = useState(true)
    const {tipo} = useParams()

    useEffect(() => {
        setSpinner(true)
        fetchProductos()
            .then((data) => {
                if (tipo){
                    setProductos(data.filter((prod) => prod.categoria === tipo))
                }else{
                    setProductos(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(()=>setSpinner(false))
    }, [tipo]) //useEffect que se ejecuta una sola vez al montar el componente y esta a la escucha de tipo

    if (spinner){
        return(
            <>
                <SpinnerLoad/>
            </>
        )
    }else{
        let categoriaMayus = tipo.charAt(0).toUpperCase() + tipo.slice(1);
        return (
            <> 
                <h1 className="titulo">{Saludo} {tipo && <span>{categoriaMayus}</span>}</h1>
                <ItemList productos={productos} />
            </>
        )
    }
};

export default ItemListContainer;