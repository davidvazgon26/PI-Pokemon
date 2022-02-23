import { useDispatch } from 'react-redux'
import {sort} from '../../redux/actions/index.js'


export default function OrderABC(){
    const dispatch = useDispatch()

       function onSelectChange(event){
        // console.log(event.target.value);
        document.querySelector('.orderForce').value='Ninguno'
        dispatch(sort(event.target.value))
    }

    return <label htmlFor="">Orden alfabético
    <select className="orderABC" name="select" onChange={onSelectChange}>
        <option value="Ninguno">Ninguno</option>
        <option value="ascendente">ascendente</option>
        <option value="descendente">descendente</option>
    </select></label>

}