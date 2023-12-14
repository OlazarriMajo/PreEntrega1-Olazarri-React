import { createContext, useState } from "react";
import { Item } from "../components/Item";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items,setItems] = useState([]);

    const clear = () => setItems([]);

    const addItem = (item) => setItems(prev => {
        return [...prev, ];
    });
    
    return <CartContext.Provider value={{ addItem, clear, items }}>{ children }</CartContext.Provider>;
};