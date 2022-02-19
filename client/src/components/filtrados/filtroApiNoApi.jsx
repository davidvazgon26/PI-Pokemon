import {apiNoApi} from '../../redux/actions/index.js'
import { useDispatch } from 'react-redux';



export default function FiltroAPINoAPi (){
    let dispatch = useDispatch();

function filterApiDB(event){
    let value = event.target.value
    // console.log(value)
    dispatch(apiNoApi(value))
}

    return <div>
                <label htmlFor="desde">Filtro Desde
                    <select name="desde" id="desde" onChange={filterApiDB}>
                        <option value=""></option>
                        <option value="Desde la API">Desde la API</option>
                        <option value="Desde la BD">Desde la BD</option>
                    </select></label>
                
    </div>


}