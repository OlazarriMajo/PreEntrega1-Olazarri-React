import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { Contacto } from "./components/Contacto";

import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { Carrito } from "./components/Carrito";
import { Checkout } from "./components/Checkout";


function App() {
  

  return(
   <div>
<CartProvider>
<BrowserRouter>
<NavBar/>

<Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/category/:id" element={<ItemListContainer />} />
  <Route path="/item/:id" element={<ItemDetailsContainer/> } />
  <Route path="/contacto" element={<Contacto />}/>
  <Route path="/carrito" element={<Carrito />}/>
  <Route path="/checkout" element={<Checkout />}/>
  <Route path="*" element={<>No hay productos encontrados</> } />
</Routes>

</BrowserRouter>
</CartProvider>
</div>
  );
  
}

export default App;
