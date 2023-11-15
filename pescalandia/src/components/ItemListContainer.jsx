import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { productos } from '../data/productos';

export const ItemListContainer = () => {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(productos);}, 2000);
    });

    promise.then((response) => {
        setProductos(response);

    })
    .finally(() => setLoading(false));
}, []);

    return (
        <Container className='mt-4'>
        <h1>CATALOGO</h1>
        <ItemList items={items} />
        </Container>
    );
};