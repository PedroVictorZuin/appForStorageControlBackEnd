const { json } = require('express');
const express = require('express');
const productsRoutes = express.Router();

// Controllers
   const ProductController = require('../controllers/productsController')
//End Controllers

productsRoutes.get('/product/list/listAll' , async (req,res)=>{

   ProductController.FindAllProducts()
   .then(data => res.send(data))
   .catch(err => res.send(err))
   
})

productsRoutes.get('/product/list/listForId/:id' , async (req,res)=>{
   
   ProductController.FindOneProduct(req.params.id)
   .then(data =>{res.send(data)})
   .catch(err => res.send(err))

})
productsRoutes.put('/product/list/updateProduct' , async (req,res)=>{

   let bodyRequest = req.body
   let idProduct = bodyRequest.idProduct
   let whatIsUpdate = bodyRequest.whatIsUpdate
   let newValue = bodyRequest.newValue
   ProductController.UpdateRegister(idProduct,whatIsUpdate,newValue)
   .then(data => res.send(data))
   .catch(err => res.send(err))

})
productsRoutes.delete('/product/list/deleteRegister/:id' , async (req,res)=>{

   let idProduct = req.params.id
   ProductController.DeleteRegister(idProduct)
   .then((data) => {res.send(data)})
   .catch(err => res.send(err))

})



module.exports = productsRoutes;