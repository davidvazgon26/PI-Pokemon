import {TRAER_POKEMONS, BUSCAR_POKEMONS, SORT, SORT_FORCE} from '../actions/index.js'

const initialState = {
    pokemons: [],
    filtroPokemons: []
}

export default function pokemonReducer(state = initialState, action){

    switch (action.type) {
        case TRAER_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filtroPokemons: action.payload
            }
        case BUSCAR_POKEMONS:
            return {
                ...state,
                filtroPokemons: action.payload
            }
        case SORT:
            let ordenarPokemons = [...state.pokemons]
            
            ordenarPokemons = ordenarPokemons.sort((a,b)=>{
                if(a.name < b.name){
                    return action.payload === "ascendente"? -1 : 1;
                }
                if (a.name > b.name) {
                    return action.payload === "ascendente"? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                filtroPokemons: ordenarPokemons
            }
        case SORT_FORCE:
            let ordenarPorFuerza = [...state.pokemons]
            
            ordenarPorFuerza = ordenarPorFuerza.sort((a,b)=>{
                if(a.force < b.force){
                    return action.payload === "Menor a Mayor"? -1 : 1;
                }
                if (a.force > b.force) {
                    return action.payload === "Menor a Mayor"? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                filtroPokemons: ordenarPorFuerza
            }
            
    
        default:
            return state;
    }

}