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
    DeleteRegister :  async function(idProduct)
    {
        return await Models.ProductModel.destroy({
            where : {id : idProduct}
        })
    },
    UpdateRegister :  async function(idProduct,whatIsUpdate , newValue)
    {
        switch(whatIsUpdate)
        {
            case "descProduct" : 
                    return await Models.ProductModel.update(
                        {
                            descProduct : newValue
                        },
                        {
                            where : {id : idProduct}
                        });
            break;
            case "sellPrice" : 
                    return await Models.ProductModel.update(
                        {
                            sellPrice : newValue
                        },
                        {
                            where : {id : idProduct}
                        }
                    )
            break;
            case "buyPrice" : 
                    return await Models.ProductModel.update(
                        {
                            buyPrice : newValue
                        },
                        {
                            where : {id : idProduct}
                        }
                    )
            break;
            case "quantity" : 
                    return await Models.ProductModel.update(
                        {
                            quantity : newValue
                        },
                        {
                            where : {id : idProduct}
                        }
                    )
            break;
            case "provider" : 
                    return await Models.ProductModel.update(
                        {
                            provider : newValue
                        },
                        {
                            where : {id : idProduct}
                        }
                    )
            break;
            default : 
            let response = 
                            {
                                error : "05",
                                descError : "Falta Parametros para Executar a Query"
                            }
            return response
            break;
        }




    },
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