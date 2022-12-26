
import './App.css';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import "./css/Main.css"


function App() {
  return (
    <>
      <div className="body-background">
        <header>
          <NavBar/>
        </header>

        <main>
          <ItemListContainer/>
        </main>
      </div>
    </>
  );
}

export default App;
