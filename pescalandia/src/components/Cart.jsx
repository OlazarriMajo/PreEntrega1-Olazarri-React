/*import { useContext,useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";

const clearBuyer = {name: "", phone:"", email:""}

export const Cart = () => {
    const [buyer, setBuyer] useState(clearBuyer)
    const{ clear, items, removeItem } = useContext(CartContext)

    const total = item.reduce((acumulado, actual) => {
         acumulado + actual.price * actual.quantity
    }, 0)

    const handleSendOrder = () => {
        const order = { buyer, items, total}

        const db = getFirestore()

        const orderCollection = collection(db,"orders")
        
        addDoc(orderCollection, order).then(({id}) => {
            if (id) {
                alert("Su orden:" + is + "fue completada")
            }
        
        }).Finally(() => {
            setBuyer(clearBuyer)
            clear()
        })
    }
}

Perdón pero no lo termine, me faltó tiempo