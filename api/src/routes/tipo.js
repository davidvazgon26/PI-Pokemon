const { Router } = require('express');
const axios = require('axios')
const {Tipo} = require('../db')
const routerT = Router();

routerT.get('/', async (req,res,next)=>{
   try {
    let tiposAPI = await axios.get('https://pokeapi.co/api/v2/type')
    let Api = tiposAPI.data.results

    Api.forEach(item=>{
        // console.log(item.name);
        let idA = parseInt(item.url.split('/')[6]);
        // console.log(idA);
        Tipo.findOrCreate({
            where: {
                name: item.name,
                idApi: idA
            }
        })
    })

     Tipo.findAll()
    .then((tipos)=>{
        res.send(tipos)
    }).catch((err)=>{
        next(err);
    })
   } catch (error) {
       next(error);
   }
})

{
// routerT.get('/', (req,res,next)=>{
//     return Tipo.findAll()
//     .then((tipos)=>{
//         res.send(tipos)
//     }).catch((err)=>{
//         next(err);
//     })
// })
}

routerT.post('/', async (req,res,next)=>{
    try {
        const {name,idApi} = req.body
        const newTipo = await Tipo.create({
            name,
            idApi
        })
        res.status(201).send(newTipo)
    } catch (error) {
        next(error);
    }
})

routerT.put('/', (req,res,next)=>{
    res.send('soy put /tipo')
})

routerT.delete('/', (req,res,next)=>{
    res.send('soy delete /tipo')
})


module.exports = routerT;