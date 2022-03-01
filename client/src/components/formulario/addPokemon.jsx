import axios from "axios"
import {useState} from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {traerTipos} from '../../redux/actions/index.js'
import { useNavigate } from "react-router-dom";
// import NavBar from '../navbar/navBar.jsx'

import s from './addPokemon.module.css'

export default function AddPokemon (){
    const [errorInput, setErrorInput] = useState(true);
    const [errorInputN, setErrorInputN] = useState(true);
    const [error, setError] = useState(true);
    let tipos = useSelector((state)=> state.tipos)
    let dispatch = useDispatch()
    useEffect(() =>{
        dispatch(traerTipos())
    },[dispatch])

    // console.log(tipos)
    const [pokemon, setPokemon] = useState({
        name:'',
        life: "",
        speed: "",
        force: "",
        defending: '',
        height: '',
        weight: '',
        img: '',
    })
    let navigate = useNavigate();

    function onInputChange(event){
        event.preventDefault()
        // console.log(event.target.value)
        // console.log(typeof event.target.value)
        if(event.target.name === 'name' || event.target.name === 'img'){
            if (event.target.name === 'name') {
                if(!/^([a-z]+[\s]*)+$/.test(event.target.value)){
                    setErrorInput('El Pokemon solo acepta letras minusculas y sin numeros');
                }else{
                    setErrorInput('')
                }
            }
            setPokemon({
                ...pokemon,
                [event.target.name]: event.target.value
            })
        }else{
            // console.log(event.target.value)
            // console.log(!/^\d{1,3}$/.test(event.target.value))
            if(!/^\d{1,3}$/.test(event.target.value)){
                setErrorInputN('En los campos de rango solo permite numeros enteros entre 1 y 999')
            }else{
                setErrorInputN('')
            }        
            setPokemon({
                ...pokemon,
                [event.target.name]: parseInt(event.target.value,10)
            })
        }
    }

    // function validatePokemon(event,value){
    //     console.log(event)
    //     console.log(value)
    //     console.log(/^([a-z]+[\s]*)+$/.test(event.target.value)) 
    //     if(!/^([a-z]+[\s]*)+$/.test(event.target.value)) {
        
    //         setError('El Pokemon solo acepta letras, sin numeros');
    //       } else {
    //         setError('');
    //       }
    //       setPokemon({
    //         ...pokemon,
    //         [event.target.name]: event.target.value
    //     })
    //     }

    function onCheckChange(){
        let checks = document.querySelectorAll('.checks')
        let arr = []
        checks.forEach((item)=>{
            // console.log(item.checked)
            if (item.checked===true) {
                arr.push(item.id)
            }
        })  
            if(arr.length>2){
                setError('El pokemon solo acepta hasta 2 variantes o tipos');
                return 
            }else{
                setError('')
                return arr
            }
    }
    

    function onSubmit(event){
        event.preventDefault()
        // console.log( event)
        let checks = document.querySelectorAll('.checks')
        let arr = []
        checks.forEach((item)=>{
                arr.push(item.id)
        }) 
        axios.post('http://localhost:3001/pokemon', pokemon)
        .then(function (response) {
            arr.forEach(item =>{
                console.log(item)
                axios.post(`http://localhost:3001/${response.data.id}/tipo/${item}`)
                .then((response)=>{console.log(response.data)})
            })
            navigate('/pokemons') 
          })
          .catch(function (error) {
            console.error(error);
          });
        // .then((response)=>{
        //     console.log(response)
        //     navigate('/pokemons')
        // })

    }

    return(<div className={s.divexterno}>
        {/* <NavBar/> */}

                <div className={` ${s.btndiv}`}>
                     <input className={s.btn} type="submit" value="Regresar" onClick={()=>navigate('/pokemons') } />
                </div>
                <h2 className={s.h2}>Formulario para agregar nuevos Pokemones</h2>

        <div className={s.divform}>
        <form className={s.form} onSubmit={onSubmit}>
                <div className={s.formdiv}>
                <div>
                <label  htmlFor="name">Nombre:</label>
                <input id={s.inputazul} name="name" type="text" placeholder="Pokemon Name" onChange={onInputChange} value={pokemon.name}/>
                {/* // value={pokemon.name} donde pokemon es el state */}
                {/* {console.log(error)} */}
                {!errorInput? null : <h4 className={s.errorname}>{errorInput}</h4>}
                </div>
                
                <div>
                <label  htmlFor="life">Vida:</label>
                <input id={s.inputazul} name="life" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.life} required/>
                </div>
                
                <div>
                <label  htmlFor="speed">Velocidad:</label>
                <input id={s.inputazul} name="speed" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.speed} required/>
                </div>
                
               <div>
               <label  htmlFor="force">Ataque:</label>
                <input id={s.inputazul} name="force" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.force} required/>
               </div>
                
                <div>
                <label htmlFor="defending">Defensa:</label>
                <input id={s.inputazul} name="defending" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.defending} required/>
                </div>
                
               <div>
               <label htmlFor="height">Altura:</label>
                <input id={s.inputazul} name="height" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.height} required/>
               </div>
                
                <div>
                <label htmlFor="">Peso:</label>
                <input id={s.inputazul} name="weight" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.weight} required/>
                </div>
                
                <div>
                <label htmlFor="">Url imagen:</label>
                <input id={s.inputazul} name="img" type="url" placeholder="Ingresa Url de la imagen" onChange={onInputChange} value={pokemon.img}/>
                </div>

                </div>
                
                {!errorInputN? null : <h4 className={s.errorname}>{errorInputN}</h4>}
                <br />
                <h5 className={s.subtitle}>Tipos de Pokemones:</h5>
                {!error? null : <h4 className={s.errorname}>{error}</h4>}
                <div className={s.check}>
                { tipos.map((tipo)=>{
                    return (
                        <div key={tipo.id} className={s.contenedorcheck}>
                        <input type="checkbox" className="checks" name={tipo.name} id={tipo.id} value={tipo.name} onChange={onCheckChange}/>
                        <label htmlFor={tipo.name} className={s.labelcheck} > {tipo.name}</label>
                        </div>
                    )
                })

                }
                </div>

                <div className={s.btndiv}>
                     <input className={errorInput?s.btn2:s.btn} type="submit" value="Registrar" disabled={errorInput?true:false} />
                </div>
            </form>
        </div>
        
    </div>

    )
}