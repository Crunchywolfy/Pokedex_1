import './App.css';
import {
  Header,
  Pokedex
} from "./components"


function App() {
  return (
    <div className="App">
     <Header />
     <main>
      <Pokedex/>
     </main>
    </div>
  );
}

export default App;
