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
            <ol>
              <Link className={s.link} to="/">Home</Link>
            </ol>
            <ol>
              <Link className={s.link} to="/pokemons">pokemons</Link>
            </ol>
            <ol>
              <Link className={s.link} to="/agregar">Add Pokemones</Link>
            </ol>
            <ol>
              <Link className={s.link} to="/about">About</Link>
            </ol>
          </ul>
        </nav>
      </div>
    );
  }