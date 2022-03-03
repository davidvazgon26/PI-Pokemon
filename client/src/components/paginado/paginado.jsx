import {useSelector, useDispatch} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {filterPag} from '../../redux/actions/index.js'

import s from './paginado.module.css'
var paginado = 12
export default function Paginado (){
    let allPokemonFiltrados = useSelector((state)=> state.filtroPokemons)
    const [count, setCount] = useState(0)
    const [max, setMax] = useState(paginado)
    let dispatch = useDispatch()

    useEffect(()=>{
        // console.log(count)
        // console.log(max)
        dispatch(filterPag(count, max))
    })

    function pagAnt(){
        setMax(max<=12?max:max-paginado)
        setCount(count<=0?count:count-paginado)
    }
    function pagSig(){
        var total = allPokemonFiltrados.length
        setMax(max>=total?max:max+paginado)
        setCount(count>=total-paginado?count:count+paginado)
    }

/*
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
    */
    // console.log(pag())
    // console.log(allPokemonFiltrados)
 
    const tot = Math.ceil(allPokemonFiltrados.length/paginado)

    const lista = []
    for(let i = 1; i < tot+1; i++) {
        lista.push([i])
    }

    return <div className={s.contenedorBtn}>
        <button className={s.btn} onClick={pagAnt}>Pag. Anterior</button>
           {/* { console.log(Math.ceil(allPokemonFiltrados.length/paginado))} */}
            <ul className={s.ulli}>
                {lista.map(item=>{
                    return <li key={item} className={s.link} onClick={()=>{   setCount((item*paginado)-paginado)
                        setMax(item*paginado)
                    }} >{item}</li>
                    
                })}
            </ul>
        <button className={s.btn} onClick={pagSig}>Pag. Siguiente</button>
    </div>
}