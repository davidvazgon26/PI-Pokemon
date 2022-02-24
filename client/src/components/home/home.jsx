import { Link } from "react-router-dom";
import fondo2 from '../../assets/images/fondo-pokemon-gif.gif'

import s from './home.module.css'

export default function Home() {
    return (
      <div className={ s.body}>
        {/* <h2>Home</h2> */}
        <p>
          <Link className={s.btn} to="/pokemons">Ingresar</Link>
        </p>
        <img className={s.imagenFondo} src={fondo2} alt="imagen home"/>
        {/* <video className="imagenFondo" src={video} alt="imagen home" autoplay /> */}
      </div>
    );
  }