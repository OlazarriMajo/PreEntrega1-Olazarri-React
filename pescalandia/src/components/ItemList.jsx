import Container from "react-bootstrap/esm/Container";

export const ItemList = ({items}) =>{
    return(<Container>
        {items.map(item => (<Item item={item} />))}
    </Container>)
};