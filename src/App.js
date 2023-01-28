
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "./css/Main.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import LoadFailPage from './components/error404/LoadFailPage';

function App() {
  return (
    <div className='body-background'>
      <BrowserRouter>
        <CartProvider>
            <header className='main'>
              <NavBar/>
            </header>
            <Routes>
              <Route path="/"  element={<ItemListContainer/>}/>

              <Route path="/category/:categoryid"  element={<ItemListContainer/>}/>

              <Route path="/cart"  element={<CartContainer/>}/>

              <Route path="/item/:id"  element={<ItemDetailContainer/>}/>

              <Route path="*"  element={<LoadFailPage/>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
