const { UpdateRegister } = require('../models/productsModel')
const ProductModel = require('../models/productsModel')


let ProductController = 
{
    InsertRegister : function(Product)
    {
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
        },
    FindOneProduct : async function(idProduct)
    {
        return await ProductModel.FindOneRegister(idProduct)
    },
    UpdateRegister : async function(idProduct,whatIsUpdate , newValue)
    {
        if(idProduct == "" || whatIsUpdate =="" || newValue == "")
        {
            let response = 
            {
                error : "05",
                descError : "Falta Parametros para Executar a Query"
            }
            return response
        }

        return await ProductModel.UpdateRegister(idProduct,whatIsUpdate , newValue).then((res) =>
        {
            let response = 
            {
                content : {
                    state : "success",
                    text : "Registro Alterado com Sucesso"
                }
            }
            return response;

        }).catch(err =>{return "Erro : " + err})
    },
    DeleteRegister : async function(idProduct)
    {
        if(idProduct == "" || idProduct == null || idProduct == undefined)
        {
            let response = 
            {
                error : "05",
                descError : "Falta Parametros para Executar a Query"
            }
            return response
        }

        return await ProductModel.DeleteRegister(idProduct).then((res) =>
        {

            if(res != 0)
            {
                let response = 
                {
                    content : {
                        state : "success",
                        text : "Registro Excluido com Sucesso"
                    }
                }
                return response
            }
            else
            {
                let response = 
                {
                    error : "06",
                    descError : "Produto Não Encontrado"
                }
                return response
            }
        }).catch(err => err)
    }

}

module.exports = ProductController