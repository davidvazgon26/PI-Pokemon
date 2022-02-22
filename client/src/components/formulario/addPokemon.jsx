import axios from "axios"
import {useState} from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {traerTipos} from '../../redux/actions/index.js'
import { useNavigate } from "react-router-dom";
import NavBar from '../navbar/navBar.jsx'


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
                setErrorInputN('Ingresa un numero entero entre 1 y 999')
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
    

    function onSubmit(event){
        event.preventDefault()
        // console.log( event)
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
            }
        axios.post('http://localhost:3001/pokemon', pokemon)
        .then(function (response) {
            arr.forEach(item =>{
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

    return(<div>
            <NavBar/>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Nombre del Pokemon:</label>
                <input name="name" type="text" placeholder="Pokemon Name" onChange={onInputChange} value={pokemon.name}/> {/* // value={pokemon.name} donde pokemon es el state */}
                {/* {console.log(error)} */}
                {!errorInput? null : <h4>{errorInput}</h4>}

                <label htmlFor="">Vida:</label>
                <input name="life" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.life} required/>

                <label htmlFor="">Velocidad:</label>
                <input name="speed" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.speed} required/>

                <label htmlFor="">Ataque:</label>
                <input name="force" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.force} required/>

                <label htmlFor="">Defensa:</label>
                <input name="defending" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.defending} required/>

                <label htmlFor="">Altura:</label>
                <input name="height" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.height} required/>

                <label htmlFor="">Peso:</label>
                <input name="weight" type="number" placeholder="Rango de 0 a 100" onChange={onInputChange} value={pokemon.weight} required/>

                {!errorInputN? null : <h4>{errorInputN}</h4>}
                              
                <label htmlFor="">Url de la imagen del Pokemon:</label>
                <input name="img" type="text" placeholder="Ingresa Url de la imagen" onChange={onInputChange} value={pokemon.img}/>

                <h5>Tipo de Pokemon:</h5>
                {!error? null : <h4>{error}</h4>}
                <div>
                { tipos.map((tipo)=>{
                    return (
                        <div key={tipo.id}>
                        <input type="checkbox" className="checks" name={tipo.name} id={tipo.id} value={tipo.name}/>
                        <label htmlFor={tipo.name}> {tipo.name}</label>
                        </div>
                    )
                })

                }
                </div>

                <input type="submit" value="Registrar" disabled={errorInput? true : false} />
            </form>
        
    </div>

    )
}