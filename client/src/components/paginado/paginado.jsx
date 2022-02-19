import {useSelector, useDispatch} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {filterPag} from '../../redux/actions/index.js'

export default function Paginado (){
    let allPokemonFiltrados = useSelector((state)=> state.filtroPokemons)
    const [count, setCount] = useState(0)
    const [max, setMax] = useState(12)
    let dispatch = useDispatch()

    useEffect(()=>{
        console.log(count)
        console.log(max)
        dispatch(filterPag(count, max))
    })

    function pagAnt(){
        setMax(max<=12?max:max-12)
        setCount(count<=0?count:count-12)
    }
    function pagSig(){
        var total = allPokemonFiltrados.length
        setMax(max>=total?max:max+12)
        setCount(count>=total-12?count:count+12)
    }

    // console.log(allPokemonFiltrados)
    
    // function paginaSiguiente (){

    // }
    
    // var itemXpage = 12
    // var cont = 0
    // const pag = () =>{
    //     const paginas = Math.ceil(allPokemonFiltrados.length / itemXpage)
    //     const result = allPokemonFiltrados.slice(cont, itemXpage)
    //     console.log(cont, itemXpage)
    //     cont = cont + 12
    //     return result
    // }
    // console.log(pag())
    // console.log(allPokemonFiltrados)
    return <div>
        <button onClick={pagAnt}>Anterior</button>
            <ul>
            </ul>
        <button onClick={pagSig}>Siguiente</button>
    </div>
}