const ProductModel = require('../models/productsModel')


let ProductController = 
{
    InsertRegister : function(Product)
    {
        Product = 
        {
            descProduct : "TESTE",
            sellPrice : 100,
            buyPrice : 10,
            quantity : 5,
            provider : 1
        }
        ProductModel.CreateRegister(Product).then((res)=>
        {
            if(res._options.isNewRecord)
            {
                let response = 
                {
                    content : {
                        state : "success",
                        text : "Registro Criado com Sucesso"
                    }
                }
                return response;
            }
        }).catch((error) =>
        {
            console.log(error)
        })
    },
    FindAllProducts : async function()
        {
           return await ProductModel.FindAllRegisters()
        }
}

module.exports = ProductController