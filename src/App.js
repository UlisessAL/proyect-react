
import './App.css';
import Carousel from './components/carousel/Carousel';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "./css/Main.css"


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
        </main>
      </div>
    </>
  );
}

export default App;
