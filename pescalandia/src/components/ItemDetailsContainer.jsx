import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container'; 
import Button from 'react-bootstrap/Button';


import { CartContext } from '../contexts/CartContext';
import { Loading } from "../components/Loader";
import { getFirestore, getDoc, doc} from "firebase/firestore";
import { ItemCounter } from './ItemCounter';


export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    const { onAdd } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "productos", id);

        getDoc(refDoc).then((snapshot) =>{
            setItem({ id: snapshot.id, ...snapshot.data() })
        })
        .finally(() => setLoading(false))
    }, [id]);

    const add = (quantity) => {
        onAdd(item, quantity)
    }

    if(!item) {
        return (  <div class="loader"> 
        <div class="dot">{Loading}</div>
        
      </div>
      )
    };

    useEffect (()=>{
        const db = getFirestore();
        const refDoc = doc(db, "productos", id);
        getDoc(refDoc).then((snapshot)=>{
          setItem( { id: snapshot.id,...snapshot.data() });
          setLoading(false)
        });
      },[id]); 

    
    return(
        
    <Container className='mt-4'>
        <h1>{item.title}</h1>
        <img src={item.picture} width={300}/>
        <p>características: {item.description}</p>
        <p>Stock: {item.stock}</p>
        <mark>precio: {item.price} AR$ </mark>
        <br />
        <ItemCounter initial={1} stock={item.stock} onAdd={add}/>
        </Container >);
};