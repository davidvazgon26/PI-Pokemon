import { Link } from 'react-router-dom';

import s from './pokemon.module.css'

export default function Pokemon ({name, img, id, tipo1, tipo2}){
    // console.log(id)
    return <div className={s.card} key={id} id={id}>
        <div className={s.circuloR}>
       
            <img  className={s.imagen} src={img} alt='imagen pokemon' />
            
        </div>
        <div className={s.contenedor}>
        <div className={s.circulo}>.</div>
        <h3 className={s.nombre}>{name}</h3>
        <div className={s.tiposContainer}>
                <div className={s.tipos}>{tipo1}</div>
                <div className={s.tipos}>{tipo2}</div>
        </div>
        <Link className={s.link} to={`/pokemons/${id}`}>
            <span >Ir a Detalle</span>
        </Link>
        </div>
    </div>

}