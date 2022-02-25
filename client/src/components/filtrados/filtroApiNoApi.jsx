import {apiNoApi} from '../../redux/actions/index.js'
import { useDispatch } from 'react-redux';

import s from './filtroApiNoApi.module.css'

export default function FiltroAPINoAPi (){
    let dispatch = useDispatch();

function filterApiDB(event){
    let value = event.target.value
    // console.log(value)
    dispatch(apiNoApi(value))
}

    return <div className={s.filtroApiNoApi}>
                <label className={s.label} htmlFor="desde">Filtro Desde</label>
                    <select className="filtroApiNoApi" name="desde" id="desde" onChange={filterApiDB}>
                        <option value="Todos">Todos</option>
                        <option value="Desde la API">Desde la API</option>
                        <option value="Desde la BD">Desde la BD</option>
                    </select>
                
    </div>


}