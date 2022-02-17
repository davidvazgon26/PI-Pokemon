import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons">pokemons</Link>
            </li>
            <li>
              <Link to="/agregar">Add Pokemones</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }