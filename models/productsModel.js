const Models  = require('../services/connectionMysql')

let ProductModel = 
{
    CreateRegister : async function(Product)
    {
        if(Product.descProduct == "" ||
           Product.sellPrice == ""   ||
           Product.buyPrice == ""    ||
           Product.quantity == ""    ||
           Product.provider == ""    ||
           Product == {} ){
               let Response = null
               return Response = {
                                    Error : "Erro : 04",
                                    Content : "04"
                                 }
           }else
           {
               return await Models.ProductModel.create(Product)
           }
    },
    DeleteRegister :  async function(Product){},
    UpdateRegister :  async function(Product){},
    FindAllRegisters : async function()
    {
        return await Models.ProductModel.findAll();
    },
    FindOneRegister : async function(idProduct)
    {
        return await Models.ProductModel.findAll({
            where : 
                    {
                        id : idProduct
                    }
        })
    },
}

module.exports = ProductModel;