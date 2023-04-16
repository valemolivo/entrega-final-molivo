import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <h1 class="text-center">Nuestros productos</h1>
      <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategory" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
