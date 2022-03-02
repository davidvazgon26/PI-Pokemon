import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

//Componentes
import Loading from '../loading/loading.jsx'
// import NavBar from '../navbar/navBar.jsx'

// CSS
import s from './pokemonDetail.module.css'

//Imagenes
import regresar from '../../assets/images/back-button.png'
import images from '../../assets/images/CualEs.png'



export default function Detail (){

    const [pokemon, setPokemon] = useState(null)
    let {id} = useParams()
    useEffect(() =>{
            axios.get('/pokemons/'+id) //http://localhost:3001
            .then((response)=>{
                setPokemon(response.data)
            })
            return()=>{
                setPokemon(null)
            }
    },[id])

    return( <div className={s.divExterno}>
        {/* <NavBar/> */}
            {
                
                pokemon? 
                <>

                <div className={s.divcontent}>
                    <Link className={s.contenedorregresar} to="/pokemons">
                        <img className={s.regresar} src={regresar} alt='icono regresar'/>
                        <strong>Regresar</strong>
                    </Link>
                </div>
                
                {/* {console.log(pokemon)} */}
                    <div className={s.contenedor}>
                        <div>
                            <h3 className={s.name}>{pokemon.name}</h3>
                            <div className={s.id}>Id: {pokemon.id}</div>
                            <img className={s.img} src={pokemon.img.includes('https')?pokemon.img:images} alt='imagen pokemon'/>
                        
                            <div className={s.nivel}>
                                <p><strong>Vida | HP: </strong> </p>
                                <input type="range" value={pokemon.life} readOnly/>
                                <output >{pokemon.life}</output>
                            </div>
                            <div className={s.nivel}>
                                <p><strong>Velocidad | Speed:</strong> </p>
                                <input type="range" value={pokemon.speed} readOnly/>
                                <output >{pokemon.speed}</output>
                            </div>
                            <div className={s.nivel}>
                                <p><strong>Ataque | Attack:</strong> </p>
                                <input type="range" value={pokemon.force} readOnly/>
                                <output >{pokemon.force}</output>
                            </div>
                            <div className={s.nivel}>
                                <p><strong>Defensa | Defense:</strong> </p>
                                <input type="range" value={pokemon.defending} readOnly/>
                                <output >{pokemon.defending}</output>
                            </div>
                            <div className={s.nivel}>
                                <p><strong>Altura | Height:</strong></p>
                                <input type="range" value={pokemon.height} readOnly/>
                                <output >{pokemon.height}</output>
                            </div>
                            <div className={s.nivel}>
                                <p><strong>Peso | Weight:</strong></p>
                                <div>
                                    <input type="range" value={pokemon.weight} readOnly/>
                                </div>
                                <output >{pokemon.weight}</output>
                            </div>
                            
                            <div className={s.tipos}>
                            
                                <p ><strong>Tipos | Types:</strong></p>
                                    <br/>
                                {pokemon.tipos.length>1?<>
                                    <span className={s.tipo}>{pokemon.tipos[0].name}</span>
                                    <span className={s.tipo}>{pokemon.tipos[1].name}</span>
                                </>:pokemon.tipos.length>0?<>
                                    <span className={s.tipo}>{pokemon.tipos[0].name}</span>
                                </>:<span>Sin Tipos</span>}
                                {/* { pokemon.tipos[0].name?<span>{pokemon.tipos[0].name}</span>: null} */}

                                
                            </div>
                                <div className={s.divFooterCard}>.</div>
                        </div>
                    </div>

                    
                   
                </>
                 : <Loading />
                 
                
            }
    </div>
    )
}




