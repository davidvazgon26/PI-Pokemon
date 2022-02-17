import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
      <div>
        <h2>La ruta buscada no existe!</h2>
        <p>
          <Link to="/">Ir a Home</Link>
        </p>
        <p>
          <Link to="/pokemons">Ir a pagina principal</Link>
        </p>
      </div>
    );
  }