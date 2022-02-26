import { useDispatch } from 'react-redux'
import {sort} from '../../redux/actions/index.js'

import s from './ordenABC.module.css'

export default function OrderABC(){
    const dispatch = useDispatch()

       function onSelectChange(event){
        // console.log(event.target.value);
        document.querySelector('.orderForce').value='Ninguno'
        dispatch(sort(event.target.value))
    }

    return <div className={s.orderABC}>
        <label className={s.label} htmlFor="">Orden alfabético </label>
            <select className="orderABC" id={s.select} name="select" onChange={onSelectChange}>
                <option value="Ninguno">Ninguno</option>
                <option value="ascendente">ascendente</option>
                <option value="descendente">descendente</option>
            </select>
    </div>

}