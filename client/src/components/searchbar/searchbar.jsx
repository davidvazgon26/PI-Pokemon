import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { buscarPokemons } from '../../redux/actions/index.js'

export default function SearchBar(){
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()
    function onSubmit(event){
        event.preventDefault()
        dispatch(buscarPokemons(search))
        
        
    }

    function onInputChange(event){
        event.preventDefault()
        setSearch(event.target.value)
    }

    return<div> 
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value={search}/>
            <input type="submit" value="Buscar" />
        </form>
    </div>
}