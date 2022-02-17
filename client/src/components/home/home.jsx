import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        <h2>Home</h2>
        <p>
          <Link to="/pokemons">Ir a pagina principal</Link>
        </p>
      </div>
    );
  }