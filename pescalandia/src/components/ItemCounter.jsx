import { useState } from "react"

export const ItemCounter = ({ initial, stock}) =>{
    return (
        <>
        <br/>
        <br/>
        <div style={{display: "flex"}}>
            <div style={{fontSize: 32}}  onClick={() =>{}}> - </div>
            <mark>{""}</mark>
            <div></div>
            <div style={{fontSize: 32}}  onClick={() =>{}}> + </div>
        </div>
        <br/>
        <button onClick={() =>{}}>Agregar al carrito</button>
        </>
    )
}