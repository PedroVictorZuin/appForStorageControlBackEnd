const express = require('express');
const usersRoutes = express.Router()


usersRoutes.get('/users/list/listAllUsers' , async (req,res)=>
{
    await res.send('TESTE DE ROTA LISTAGEM DE USUARIOS')
})



module.exports = usersRoutes;