import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function Detail (){

    const [pokemon, setPokemon] = useState(null)
    let {id} = useParams()
    useEffect(() =>{
            axios.get('http://localhost:3001/pokemons/'+id)
            .then((response)=>{
                setPokemon(response.data)
            })
            return()=>{
                setPokemon(null)
            }
    },[])

    

    return( <div>
    
            {
                
                pokemon? 
                <>
                {/* {console.log(pokemon)} */}
                    <div>
                        <div>
                            <img src={pokemon.img} alt='imagen pokemon'/>
                            <h3>{pokemon.name}</h3>
                        </div>
                        <div>
                            <div>
                                <p>Vida | HP</p>
                                <span>{pokemon.life}</span>
                            </div>
                            <div>
                                <p>Velocidad | Speed</p>
                                <span>{pokemon.speed}</span>
                            </div>
                            <div>
                                <p>Ataque | Attack</p>
                                <span>{pokemon.force}</span>
                            </div>
                            <div>
                                <p>Defensa | Defense</p>
                                <span>{pokemon.defending}</span>
                            </div>
                            <div>
                                <p>Altura | Height</p>
                                <span>{pokemon.height}</span>
                            </div>
                            <div>
                                <p>Peso | Weight</p>
                                <span>{pokemon.weight}</span>
                            </div>
                            
                            <div>
                            
                                <p>Tipos | Types</p>

                                {pokemon.tipos.length>1?<>
                                    <span>{pokemon.tipos[0].name}</span>
                                    <span>{pokemon.tipos[1].name}</span>
                                </>:pokemon.tipos.length>0?<>
                                    <span>{pokemon.tipos[0].name}</span>
                                </>:<span>Sin Tipos</span>}
                                {/* { pokemon.tipos[0].name?<span>{pokemon.tipos[0].name}</span>: null} */}
                                
                                
                            </div>
                        </div>
                    </div>
                    <Link to="/pokemons">Regresar</Link>
                </>
                 : <div>loading...</div>
                
            }
    </div>
    )
}




