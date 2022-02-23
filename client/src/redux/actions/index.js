import axios from 'axios'

export const TRAER_POKEMONS = 'TRAER_POKEMONS'
export const BUSCAR_POKEMONS = 'BUSCAR_POKEMONS'
export const SORT = 'SORT'
export const SORT_FORCE = 'SORT_FORCE'
export const FILTER = 'FILTER'
export const TRAER_TIPOS = 'TRAER_TIPOS'
export const FILTER_API = 'FILTER_API'
export const FILTER_PAG = 'FILTER_PAG'
export const BUSCAR_POKEMON_ID = 'BUSCAR_POKEMON_ID'
export const RESET = 'RESET'

export function traerPokemons(){
    return function(dispatch) {
        axios.get('http://localhost:3001/pokemons')
        .then((pokemons)=>{
            dispatch({
                type: TRAER_POKEMONS,
                payload:pokemons.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function traerTipos(){
    return function(dispatch) {
        axios.get('http://localhost:3001/tipo')
        .then((tipos)=>{
            dispatch({
                type: TRAER_TIPOS,
                payload: tipos.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

// export function buscarPokemonID(id){
//     return function(dispatch) {
//         axios.get('http://localhost:3001/pokemons/'+id)
//         .then((response)=>{
//             console.log(response)
//             dispatch({
//                 type: BUSCAR_POKEMON_ID,
//                 payload: response.data
//             })
//         })
//     }
// }


export function buscarPokemons(search){
    return function(dispatch) {
        axios.get('http://localhost:3001/pokemons?name='+search)
        .then((pokemons)=>{
            dispatch({
                type: BUSCAR_POKEMONS,
                payload:pokemons.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function sort(order){
    return {
        type: SORT,
        payload: order
    }
}

export function sortForce(order){
    return{
        type: SORT_FORCE,
        payload: order
    }
}

export function filter (key, value){  //Tipos
    return{
        type:FILTER,
        payload: {
            key,
            value
        }
    }
}

export function apiNoApi (value){
    return {
        type:FILTER_API,
        payload: value
        
    }
}

export function filterPag (count, max){
    return {
        type:FILTER_PAG,
        payload:{
            count,
            max
        }
    }
}

export function hacerReset (payload){
    return {
        type:RESET,
        payload:payload
    }
}