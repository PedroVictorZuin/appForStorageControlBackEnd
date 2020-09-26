const express = require('express');
const productsRoutes = express.Router();

productsRoutes.get('/product/list/listAll' , async (req,res)=>{
    await res.send('LISTAGEM DE TODOS OS PRODUTOS')
})

productsRoutes.get('/product/list/listForId/:id' , async (req,res)=>{
   await res.send('Listagem de produto especifico por id')
})

productsRoutes.get('/product/list/listForName/:name' , async (req,res)=>{
   await res.send('LISTAGEM DE TODOS OS PRODUTOS por nome')
})



module.exports = productsRoutes;