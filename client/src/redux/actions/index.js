import axios from 'axios'

export const TRAER_POKEMONS = 'TRAER_POKEMONS'
export const BUSCAR_POKEMONS = 'BUSCAR_POKEMONS'
export const SORT = 'SORT'
export const SORT_FORCE = 'SORT_FORCE'


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