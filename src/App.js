
import './App.css';
import Carousel from './components/carousel/Carousel';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "./css/Main.css"
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <div className="body-background">
        <header className='main'>
          <NavBar/>
        </header>

        <main className='main'>
          <Carousel/>
          <ItemListContainer/>
          <ItemDetailContainer/>
        </main>
      </div>
    </>
  );
}

export default App;
