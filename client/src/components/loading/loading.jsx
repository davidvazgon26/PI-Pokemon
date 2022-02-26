
import pikachu from '../../assets/images/pikachu.gif'

import s from './loading.module.css'

export default function Loading(){

    return(<div className={s.loading}>
            <img src={pikachu} alt='imagen loading'/>
            <br />
            <span><strong>loading...</strong></span>

        </div>
    )
}