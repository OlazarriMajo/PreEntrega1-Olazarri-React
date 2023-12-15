import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { ItemList } from './ItemList';

import { getFirestore, getDoc, getDocs, collection, doc} from "firebase/firestore";
import { Loading } from './Loader';


export const ItemListContainer = () => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();
};


useEffect (() => {
    const db = getFirestore();

    const refCollection = collection(db,"productos", id);

    getDocs(refCollection).then((snapshot) => {
    
            setItems(return { id: doc.id, ...doc.data()});

        })
        .finally(() => setLoading(false));
    }, [id]);

if(Loading) {
    return <>Loading</>
}

   return (
        <Container className='mt-4'>
        <h1>CATALOGO</h1>
        <ItemList items={items} />
        </Container>
    ); /*
};