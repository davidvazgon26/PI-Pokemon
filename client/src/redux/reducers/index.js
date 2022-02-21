import {TRAER_POKEMONS, BUSCAR_POKEMONS, SORT, SORT_FORCE, FILTER, TRAER_TIPOS, FILTER_API, FILTER_PAG} from '../actions/index.js'

const initialState = {
    pokemons: [],
    filtroPokemons: [], //allCharacters
    tipos:[],
    pokemonsMostrar:[]
}

export default function pokemonReducer(state = initialState, action){

    switch (action.type) {
        case TRAER_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filtroPokemons: action.payload
            }
        case TRAER_TIPOS:
            return{
                ...state,
                tipos: action.payload
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
            case FILTER:
                let key= action.payload.key
                let value = action.payload.value
                const newPokemons = state.pokemons.filter((pokemon) =>{
                        let result = (pokemon[key],value, pokemon[key].length>1?Object.values(pokemon[key][1]).includes(value) ||Object.values(pokemon[key][0]).includes(value):pokemon[key].length>0?  Object.values(pokemon[key][0]).includes(value) : false)

                    return result.length === 0? ["No hay datos para mostrar"]: result
                    
                })
                // console.log(newPokemons)
                return{
                    ...state,
                    filtroPokemons: newPokemons
                    // filtroPokemons
                }
            case FILTER_API:
                let valueC = action.payload
                // console.log(action)
                const newFilter = state.pokemons.filter((pokemon) =>{
                        // console.log(typeof pokemon.id === "string")

                        let resultado = valueC === "Desde la API"? typeof pokemon.id === "number": valueC === "Desde la BD"? typeof pokemon.id === "string": false
                        // console.log(resultado)
                    return resultado
                })
                    // console.log(newFilter)
                return {
                    ...state,
                    filtroPokemons: newFilter
                }
            case FILTER_PAG:
                let count = action.payload.count
                let max = action.payload.max
                const result = state.filtroPokemons.slice(count, max)
                // console.log(result)
                return {
                    ...state,
                    pokemonsMostrar: result
                }
            
    
        default:
            return state;
    }

}