import { Link } from 'react-router-dom'

export default function Pokemon ({name, img, id}){
    // console.log(id)
    return <div key={id} id={id}>
        <Link to={`/pokemons/${id}`}>
            <span>Ir a Detalle</span>
        </Link>
        <img  src={img} alt='imagen pokemon' />
        <h3>{name}</h3>
    </div>

}