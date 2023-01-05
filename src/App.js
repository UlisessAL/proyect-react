
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "./css/Main.css"
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import LoadFailPage from './components/error404/LoadFailPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='body-background'>
      <BrowserRouter>
      
          <header className='main'>
            <NavBar/>
          </header>

          <Routes>

            <Route path="/"  element={<ItemListContainer/>}/>

            <Route path="/category/:categoryid"  element={<ItemListContainer/>}/>

            <Route path="/item/:id"  element={<ItemDetailContainer/>}/>

            <Route path="*"  element={<LoadFailPage/>}/>
          </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
