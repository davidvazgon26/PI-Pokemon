import { useDispatch } from 'react-redux'
import {sortForce} from '../../redux/actions/index.js'


export default function OrderForce(){
    const dispatch = useDispatch()

       function onSelectChange(event){
        // console.log(event.target.value);
        dispatch(sortForce(event.target.value))
    }

    return <select name="select" onChange={onSelectChange}>
        <option value="Menor a Mayor">Menor a Mayor</option>
        <option value="Mayor a Menor">Mayor a Menor</option>
    </select>

}