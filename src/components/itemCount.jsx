import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    
    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={restar} disabled={counter === 0}>-</button>
            <span className="btn">{counter}</span>
            <button className="btn btn-success" onClick={sumar} disabled={counter === stock}>+</button>
            <button className="btn btn-primary" onClick={() => onAdd(counter)} disabled={counter === 0 || stock === 0}>Comprar</button>
        </div>
    )
}

export default ItemCount;