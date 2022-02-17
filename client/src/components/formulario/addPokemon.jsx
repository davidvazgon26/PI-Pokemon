import axios from "axios"
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from '../navbar/navBar.jsx'


export default function AddPokemon (){
    const [pokemon, setPokemon] = useState({})
    let navigate = useNavigate();

    function onInputChange(event){
        event.preventDefault()
        setPokemon({
            ...pokemon,
            [event.target.name]: event.target.value
        })
    }

    function onSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:3001/pokemons/', pokemon)
        .then(()=>{
            navigate('/pokemons')
        })

    }

    return(<div>
            <NavBar/>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Nombre del Pokemon:</label>
                <input name="name" type="text" onChange={onInputChange} value={pokemon.name}/>
               
                <label htmlFor="">Vida:</label>
                <input name="life" type="number" onChange={onInputChange} value={pokemon.life}/>
               
                <label htmlFor="">Velocidad:</label>
                <input name="speed" type="number" onChange={onInputChange} value={pokemon.speed}/>
               
                <label htmlFor="">Ataque:</label>
                <input name="force" type="number" onChange={onInputChange} value={pokemon.force}/>
               
                <label htmlFor="">Defensa:</label>
                <input name="defending" type="number" onChange={onInputChange} value={pokemon.defending}/>

                <label htmlFor="">Altura:</label>
                <input name="height" type="number" onChange={onInputChange} value={pokemon.height}/>

                <label htmlFor="">Peso:</label>
                <input name="weight" type="number" onChange={onInputChange} value={pokemon.weight}/>
               
                <label htmlFor="">Url de la imagen del Pokemon:</label>
                <input name="img" type="text" onChange={onInputChange} value={pokemon.img}/>

                <input type="submit" value="Registrar"/>
            </form>
        
    </div>

    )
}