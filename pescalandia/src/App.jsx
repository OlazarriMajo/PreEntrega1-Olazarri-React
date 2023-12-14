import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";

import "./App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  

  return(
   
<BrowserRouter>
<NavBar/>
<CartProvider>
<Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/category/:id" element={<ItemListContainer />} />
  <Route path="/item/:id" element={<ItemDetailsContainer/> } />
  <Route path="*" element={<>ERROR!</> } />
</Routes>
</CartProvider>
</BrowserRouter>

  );
  
}

export default App;
