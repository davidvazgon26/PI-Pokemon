import { useDispatch } from 'react-redux'
import {sortForce} from '../../redux/actions/index.js'

import s from './ordenForce.module.css'

export default function OrderForce(){
    const dispatch = useDispatch()

       function onSelectChange(event){
        // console.log(event.target.value);
        document.querySelector('.orderABC').value='Ninguno'
        dispatch(sortForce(event.target.value))
    }

    return <div className={s.ordenForce}>
        <label className={s.label} htmlFor="">Orden fuerza </label>
        <select className="orderForce" id={s.select} name="select" onChange={onSelectChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="Menor a Mayor">Menor a Mayor</option>
            <option value="Mayor a Menor">Mayor a Menor</option>
        </select>
    </div> 

}