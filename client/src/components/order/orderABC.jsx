import { useDispatch } from 'react-redux'
import {sort} from '../../redux/actions/index.js'


export default function OrderABC(){
    const dispatch = useDispatch()

       function onSelectChange(event){
        // console.log(event.target.value);
        dispatch(sort(event.target.value))
    }

    return <select name="select" onChange={onSelectChange}>
        <option value="ascendente">ascendente</option>
        <option value="descendente">descendente</option>
    </select>

}