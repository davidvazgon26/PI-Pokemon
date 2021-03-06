import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {traerPokemons} from '../../redux/actions/index.js'

//Componentes
import Loading from '../loading/loading.jsx'
import Pokemon from '../pokemon/pokemon.jsx'
import s from './pokemons.module.css'

export default function Pokemons(){
    let pokemons = useSelector((state)=> state.pokemonsMostrar)
    // let filtro = useSelector((state)=> state.filtroPokemons)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(traerPokemons())
    },[dispatch])
    // console.log(pokemons)  
    return <div className={s.contenedorCards}>
{/* {console.log(pokemons.length)} */}
               { pokemons.length>0? 
               
                pokemons.map((pokemon)=>{
                    let tipo1, tipo2
                    if(pokemon.tipos.length > 1){
                        tipo1 = pokemon.tipos[0].name
                        tipo2 = pokemon.tipos[1].name
                    }else if(pokemon.tipos.length > 0){
                        tipo1 = pokemon.tipos[0].name
                        tipo2 = ""
                    }else{tipo1 = ""; tipo2 = ""}
                    
                    return <Pokemon className={s.card} key={pokemon.id} id={pokemon.id} name={pokemon.name} img={pokemon.img}
                        tipo1 = {tipo1} tipo2 = {tipo2}
                    />

                })
               : 
               <div className={s.loading} >

               <Loading />
               </div>
               
               }
        
            </div>
}