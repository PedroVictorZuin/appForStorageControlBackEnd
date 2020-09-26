const express = require('express');
const simpleRoutes = express.Router();

simpleRoutes.get('' , async (req,res)=>
{
   await res.send('Rota Principal')
})


module.exports = simpleRoutes