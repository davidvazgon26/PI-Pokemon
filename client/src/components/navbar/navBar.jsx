import { Link } from "react-router-dom";

import s from './navBar.module.css'

import logo from "../../assets/images/logo-pokemon2.png"


export default function NavBar() {
    return (
      <div className={s.container}>
          <img className={s.img} src={logo} alt="imagen logo"/>
          <p className={s.parrafo}>Bienvenido al catálogos de Pokemones</p>
        <nav className={s.navegacion}>
          <ul>
            <li>
              <Link className={s.link} to="/">Home</Link>
            </li>
            <li>
              <Link className={s.link} to="/pokemons">pokemons</Link>
            </li>
            <li>
              <Link className={s.link} to="/agregar">Add Pokemones</Link>
            </li>
            <li>
              <Link className={s.link} to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }