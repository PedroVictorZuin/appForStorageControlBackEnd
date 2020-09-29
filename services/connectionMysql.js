const { Model } = require('sequelize')
const Sequelize = require('sequelize')


// instance the modules of the connectionDatabase
const connectionData = require('../enviroments/enviromentMysql')
const sequelize = new Sequelize(connectionData)

// Instanciate Models

const Models = 
{
    ProductModel : sequelize.define('productstable' , 
    {
        descProduct : {
            type : Sequelize.STRING,
            allowNull : false
        },
        sellPrice : {
            type : Sequelize.DECIMAL,
            allowNull : false
        },
        buyPrice : {
            type : Sequelize.DECIMAL,
            allowNull : false
        },
        quantity : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        provider : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    }),
    ProviderModel : sequelize.define('providerstable' , 
    {
        nameProvider : 
        {
            type: Sequelize.STRING
        },
        cnpjProvider : 
        {
            type : Sequelize.STRING
        },
        telephoneProvider : 
        {
            type : Sequelize.STRING
        }
    })
}

module.exports = Models


