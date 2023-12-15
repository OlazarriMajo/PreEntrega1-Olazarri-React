import { useState } from "react"

export const ItemCounter = ({ initial, stock, onAdd}) =>{
const [count, setCount] = useState(initial)

const handleDecreaseCount = () => {
    if (count > initial) setCount((c) => c - 1)
}

const handleIncreaseCount = () => {
    if (stock > count) setCount((c) => c + 1)
}

const handleAdd = () => {
    onAdd(count)
    setCount(initial)
}
    return (
        <>
        <br/>
        <br/>
        <div style={{display: "flex"}}>
            <div style={{fontSize: 32}}  onClick={handleDecreaseCount}> - </div>
            <mark>{count}</mark>
            <div></div>
            <div style={{fontSize: 32}}  onClick={handleIncreaseCount}> + </div>
        </div>
        <br/>
        <button onClick={handleAdd}>Agregar al carrito</button>
        </>
    )
}