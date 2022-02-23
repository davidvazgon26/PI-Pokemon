import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {traerPokemons} from '../../redux/actions/index.js'

import Pokemon from '../pokemon/pokemon.jsx'
import styles from './pokemons.modules.css'

export default function Pokemons(){
    let pokemons = useSelector((state)=> state.pokemonsMostrar)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(traerPokemons())
    },[dispatch])
    // console.log(pokemons)  
    return <div>
                {pokemons.map((pokemon)=>{
                    return <Pokemon className={styles.card} key={pokemon.id} id={pokemon.id} name={pokemon.name} img={pokemon.img}/>

                })}
            </div>
}