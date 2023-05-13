import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
              <Route path="/" element={ <ItemListContainer greeting={'Nuestros productos'}/> } />
              <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
              <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />
              <Route path="/cart" element={<Cart/>}   />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<h2 class="text-center font-monospace">ERROR 404: NOT FOUND</h2>} />
          </Routes>
        </CarritoProvider>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
