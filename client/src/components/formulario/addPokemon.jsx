import axios from "axios"
import {useState} from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {traerTipos} from '../../redux/actions/index.js'
import { useNavigate } from "react-router-dom";
import NavBar from '../navbar/navBar.jsx'


export default function AddPokemon (){
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
        // console.log(typeof event.target.value)
        if(event.target.name === 'name' || event.target.name === 'img'){
            setPokemon({
                ...pokemon,
                [event.target.name]: event.target.value
            })
        }else{
            setPokemon({
                ...pokemon,
                [event.target.name]: parseInt(event.target.value,10)
            })
        }
    }

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
            // console.log(arr)
        axios.post('http://localhost:3001/pokemon', pokemon)
        .then(function (response) {
            arr.forEach(item =>{
                axios.post(`http://localhost:3001/${response.data.id}/tipo/${item}`)
                .then((response)=>{console.log(response.data)})
            })
            navigate('/pokemons') 
          })
          .catch(function (error) {
            console.log(error);
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
                <input name="name" type="text" onChange={onInputChange} value={pokemon.name}/> {/* // value={pokemon.name} donde pokemon es el state */}
               
                <label htmlFor="">Vida:</label>
                <input name="life" type="number" onChange={onInputChange} value={pokemon.life}/>
               
                <label htmlFor="">Velocidad:</label>
                <input name="speed" type="number" onChange={onInputChange} value={pokemon.speed}/>
               
                <label htmlFor="">Ataque:</label>
                <input name="force" type="number" onChange={onInputChange} value={pokemon.force}/>
               
                <label htmlFor="">Defensa:</label>
                <input name="defending" type="number" onChange={onInputChange} value={pokemon.defending}/>

                <label htmlFor="">Altura:</label>
                <input name="height" type="number" onChange={onInputChange} value={pokemon.height}/>

                <label htmlFor="">Peso:</label>
                <input name="weight" type="number" onChange={onInputChange} value={pokemon.weight}/>
               
                <label htmlFor="">Url de la imagen del Pokemon:</label>
                <input name="img" type="text" onChange={onInputChange} value={pokemon.img}/>

                <h5>Tipo de Pokemon:</h5>
               
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

                <input type="submit" value="Registrar"/>
            </form>
        
    </div>

    )
}