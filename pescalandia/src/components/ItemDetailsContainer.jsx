import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container'; 
import { productos } from "../data/productos";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {resolve(productos);}, 2000);
        });
    
        promise.then((response) => {
                const filtered = response.find(item => item.id == id);
                setItem(filtered);
        })
    }, [id]);

    if(!item) {
        return <>Loading</>
    };

    return(<div><h1>{item.title}</h1><img src={item.picture} width={300}/><p>{item.description}</p><mark>{item.price} AR$ </mark></div>);
};