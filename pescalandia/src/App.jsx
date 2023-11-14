import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";

function App() {
  

  return(
<BrowserRouter>
<Routes>
  <Route path="" element={} />
</Routes>
</BrowserRouter>
  );
  
  
  
  
  
  /*<>
  <NavBar />
  <ItemListContainer greeting="Bem-Vindos!"/>
  </>;*/
  
}

export default App;
