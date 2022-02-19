import {traerTipos} from '../../redux/actions/index.js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filter } from '../../redux/actions/index.js'

export default function Filtrar (){
    let tipos = useSelector((state)=> state.tipos)
    let dispatch = useDispatch()
    useEffect(() =>{
        dispatch(traerTipos())
    })

    // console.log(tipos)
    function filterChange(event){
        let key = event.target.name
        let value = event.target.value
        // console.log(key, value)
        dispatch(filter(key, value))
    }

    return(
        <div>
            <label htmlFor="tipos">Filtro por Tipo</label>
            <select name="tipos" onChange={filterChange} id='tipos'>
                <option value=""></option>
                { tipos.map((tipo)=>{
                    return (<option key={tipo.id} id={tipo.id} value={tipo.name}>{tipo.name}</option>)
                })

                }
            </select>
                    
                        
                  
                
        </div>
    )
}