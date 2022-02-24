import { Routes, Route } from "react-router-dom";

//Componentes 
import Principal from './components/principal/principal.jsx'
import NoMatch from './components/noMatch/noMatch.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Detail from './components/pokemonDetail/pokemonDetail.jsx'
import AddPokemon from './components/formulario/addPokemon.jsx'

import './App.css';

//div className="App"
function App() {
  return (
    <>

      <Routes>
            <Route index  element={<Home/>}/>
            <Route path="/pokemons"  element={<Principal/>} />
            <Route path="/pokemons/:id"  element={<Detail/>} />
            <Route path="/agregar"  element={<AddPokemon/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="*" element={<NoMatch />} />
      </Routes>
      
    </>
  );
}

export default App;
