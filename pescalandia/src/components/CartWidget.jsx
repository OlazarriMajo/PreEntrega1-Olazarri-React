import cart from '../assets/—Pngtree—shopping cart_5394047.png';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const{ items } = useContext(CartContext)

    const total = items.reduce((acumulado, actual) => {
        return acumulado + actual.quantity
    }, 0)
    return (
    <>
    <img src = {cart} alt="carrito de compras" width="50" />
    <span>{total}</span>
    </> 
    );
};