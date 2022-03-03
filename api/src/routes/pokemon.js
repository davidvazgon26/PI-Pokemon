const { Router } = require('express');
const {Op} = require('sequelize')
const axios = require('axios')
const {Pokemon, Tipo} = require('../db');
const routerP = Router(); // Instancia a exportar

/**********Funciones de apoyo******* */

function acomodarDatos (response){

    const T = response.data.types
    const tipos = T.map(item =>{
        let num = parseInt(item.type.url.split('/')[6]);
        return {id: num, name: item.type.name,
        }
    })

    obj = {
            id: response.data.id,
            name: response.data.name,
            life: response.data.stats[0].base_stat,
            force: response.data.stats[1].base_stat,
            defending: response.data.stats[2].base_stat,
            speed: response.data.stats[5].base_stat,
            height: response.data.height,
            weight: response.data.weight,
            img: response.data.sprites.other["official-artwork"].front_default,
            tipos: tipos
    };

    return obj
}

// var pokemonsArray = []

async function unPokemon(url = "https://pokeapi.co/api/v2/pokemon/4/"){
    let response = await axios.get(url)
    let link = acomodarDatos(response)
    // console.log(link)
    // pokemonsArray.push(link);
    return link
}

/********************************** */

routerP.get ('/pokemons', async(req,res,next)=>{
    try {
        
    const {name} = req.query
    var pokemonDBArray = []

    if (name) {  //Para traer por nombre
        console.log('Llego un nombre: '+ name)

        const pokemonAPI = axios.get('https://pokeapi.co/api/v2/pokemon/'+name).catch((err)=>{})
        // console.log(pokemonAPI)

        const pokemonDB = Pokemon.findOne({
            include: Tipo,
            where: {
                name : {
                    [Op.iLike]: name 
                }
            }        
        })
       
        let das = Promise.all([pokemonDB,pokemonAPI])
        das.then(response =>{
            // console.log(response)
            [pokeDB,pokeAPI] = response
            let DB 
            pokeDB? DB=pokeDB.dataValues : DB= []
            let API 
            pokeAPI? API = acomodarDatos(pokeAPI) : API = []
            // console.log(API)
            let allPokemons = [DB,API]
            res.status(200).send(allPokemons)
        })

    } else {  // Para traerlos todos
        var arr =[]
        let pokemonAPI = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=46')
        let objetos = pokemonAPI.data.results
        objetos.forEach((item) => {
            const response = unPokemon(item.url)
            arr.push(response)
        })
    
        pokemonsDB = Pokemon.findAll({ include: Tipo})
    
        pokemonsDB.then(response => {
            pokemonDBArray = response.map((item)=>{
                    let pokeDB = item.dataValues
                    return pokeDB
            })
            // console.log(pokemonDBArray)
        })
        Promise.all(arr).then(response=>{
            // console.log(response)
            let allPokemons = pokemonDBArray.concat(response)
            res.status(200).send(allPokemons)
        })
    }

    } catch (error) {
        next(error);
    }
})



routerP.get('/pokemons/:id',  (req,res,next)=>{
    try {
        let {id} = req.params

    if (id.length<4) {
        axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
        .then(response =>{
            
            let api = acomodarDatos(response)
            res.send(api)
        })
    } else {
        Pokemon.findAll({ 
           where:{
               id:{
                   [Op.eq]:id
               }
           },
           include: Tipo
            
        })
        .then((response)=>{
            const [DB] = response
            // console.log(DB.dataValues)
            res.send(DB.dataValues)
        })
    }
    } catch (error) {
        next(error); // tambien lo mando al cc errores o endware
    }
})

{
// routerP.get('/pruebas2', (req,res,next)=>{
//     let pokemonAPI2 = axios.get('https://pokeapi.co/api/v2/pokemon/1/')
//     let pokemonDB2 = Pokemon.findAll({ include: Tipo })
//     Promise.all([pokemonAPI2,pokemonDB2])
//     .then((respuesta)=>{
//         const [pokemonAPI2,pokemonDB2] = respuesta
//         console.log(pokemonAPI2.data.types)
//         // console.log(pokemonDB)
//         res.send('Hola mancos')
//     })
// })

// routerP.get('/', (req,res,next)=>{
//     return Pokemon.findAll({
//         include: Tipo
//     })
//     .then((pokemons)=>{
//         res.send(pokemons)
//     }).catch((err)=>{
//         next(err); // Next para que vaya al control centralizado de errores o endware
//     })
// })
}

routerP.post('/', async (req,res,next)=>{
   try {
    const {name, life, force, defending, speed,height, weight, img} = req.body;
    const newPokemon = await Pokemon.create({
        name,
        life,
        force,
        defending,
        speed,
        height,
        weight, 
        img
    })
    res.send(newPokemon)
   } catch (error) {
       next(error); // tambien lo mando al cc errores o endware
   }
})

routerP.post('/:pokemonId/tipo/:tipoId', async (req,res,next)=>{
   try {
    const {pokemonId, tipoId} = req.params;
    const pokemon = await Pokemon.findByPk(pokemonId)
    console.log(pokemon.JSON)
    await pokemon.addTipos(tipoId)
    res.status(200).send('')
   } catch (error) {
       next(error); // tambien lo mando al cc errores o endware
   }
})

routerP.put('/', (req,res,next)=>{
    res.send('soy put /pokemon')
})

routerP.delete('/', (req,res,next)=>{
    res.send('soy delete /pokemon')
})


{/********** Con Promesas ***********/
 // routerP.get("/pokemonshome", (req, res, next) => {
//   //debe devolver Imagen, nombre, tipo,
//   console.log("ingreso a pokemonshome");
//   try {
//     var probanding = [];
//     var probandingDB = [];
//     let n = 1;
//     Pokemon.findAll({
//       include: [
//         {
//           model: Tipo,
//           attributes: ["name"],
//         },
//       ],
//     }).then((response) => {
//       probandingDB = response.map((item) => {
//         //    console.log(item.dataValues)
//         return (obj = {
//           id: item.dataValues.id,
//           name:
//             item.dataValues.name.charAt(0).toUpperCase() +
//             item.dataValues.name.slice(1),
//           image: item.dataValues.image,
//           strength: item.dataValues.strength,
//           // types: pokeDBS[i].types.map(e => e.name)
//         });
//       });
//       // console.log(probandingDB)
//       let arr = [];
//       while (n < 2) {
//         arr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${n}/`));
//         n++;
//       }
//       Promise.all(arr).then((response) => {
//         probanding = response.map((item) => {
//           // console.log(response.data)
//           return (obj = {
//             id: item.data.id,
//             name: item.data.name,
//             life: item.data.stats[0].base_stat,
//             force: item.data.stats[1].base_stat,
//             defending: item.data.stats[2].base_stat,
//             speed: item.data.stats[5].base_stat,
//             height: item.data.height,
//             weight: item.data.weight,
//             img: item.data.sprites.other["official-artwork"].front_default,
//           });
//         });
//         console.log(probanding);
//         let allPokeHome = [...probandingDB, ...probanding];
//         res.send(allPokeHome);
//       });
//     });
//   } catch (error) {
//     next(error);
//   }
// }); 
/**********************/}

module.exports = routerP;