import { useDispatch } from "react-redux"
import {hacerReset} from '../../redux/actions/index.js'

export default function Reset(){

    let dispatch = useDispatch()

        function reset (){
            document.querySelector('.orderForce').value='Ninguno' 
            document.querySelector('.orderABC').value='Ninguno' 
            document.querySelector('.inputSearch').value='' 
            document.querySelector('.filtroApiNoApi').value='Todos' 
            document.querySelector('.filtroTipo').value='Todos' 

            dispatch(hacerReset())
        }

    return <div>
        <button onClick={reset}>Reset</button> 
    </div>
}