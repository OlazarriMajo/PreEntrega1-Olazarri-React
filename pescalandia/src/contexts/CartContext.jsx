import { createContext, useState } from "react";
import { Item } from "../components/Item";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items,setItems] = useState([]);

    const clear = (id) => {
        const newItem = items.filter((prev) => prev.id !==id)
        setItems(newItem)
    };

    const onAdd = (item, quantity) => {
        const exist = items.some(i => i.id === item.id)

        if (exist) {
            const updateItem = items.map(i => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    }
                } else {
                    return i
                }
                
            })
            setItems(updateItem)
        } else {
            setItems((prev) => {
                return [...prev, { ...item, quantity }];
            })
        }
   };
    
    return <CartContext.Provider value={{ onAdd, clear, items }}>{ children }</CartContext.Provider>;
};