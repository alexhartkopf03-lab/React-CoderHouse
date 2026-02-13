import { useState, useEffect } from "react";
// import { fetchProductos } from "../asyncMock/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SpinnerLoad from "./SpinnerLoad";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../service/firebase"

const ItemListContainer = ({ Saludo }) => {

    const [productos, setProductos] = useState([])
    const [spinner, setSpinner] = useState(false)
    const { tipo } = useParams()

//CONEXION A FIREBASE
    useEffect(() => {
        setSpinner(true)
        const prodCollections = tipo ? query(collection(db, "productos"), where("categoria", "==", tipo)) : collection(db, "productos")
        getDocs(prodCollections)
            .then((res) => { //Trata la promesa
                const list = res.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                })
                setProductos(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setSpinner(false))
    }, [tipo]) //useEffect que se ejecuta una sola vez al montar el componente y esta a la escucha de tipo

//CONEXION CON PROMESA AL MOCK
    // useEffect(() => {
    //     setSpinner(true)
    //     fetchProductos()
    //         .then((data) => {
    //             if (tipo) {
    //                 setProductos(data.filter((prod) => prod.categoria === tipo))
    //             } else {
    //                 setProductos(data)
    //             }
    //         })
    //         .catch((error) => console.log(error))
    //         .finally(() => setSpinner(false))
    // }, [tipo]) //useEffect que se ejecuta una sola vez al montar el componente y esta a la escucha de tipo

    if (spinner) {
        return (
            <>
                <SpinnerLoad />
            </>
        )
    } else {
        const categoriaMayus = tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : ""
        return (
            <>
                <h1 className="titulo">{Saludo} {tipo && <span>{categoriaMayus}</span>}</h1>
                <ItemList productos={productos} />
            </>
        )
    }
};

export default ItemListContainer;