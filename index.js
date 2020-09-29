const express = require('express');
const app = express();
const appConfig = require('./enviroments/enviroment')
const productRoutes = require("./routes/productsRoutes")
const userRoutes = require("./routes/userRoutes")
const simpleRoutes = require("./routes/simpleRoutes")


//  Declaration the Routes of the system ! 
    app.use(productRoutes)
    app.use(userRoutes)
    app.use(simpleRoutes)
// End Declaratiom of the Routes of the system ! 


// Database Connection 

    const connectionOfDatabase = require('./enviroments/enviromentMysql')

// End of Database Connection 








app.listen(appConfig.PORT , ()=>
{
    console.log('Lanching myStorageControl in PORT : ' + appConfig.PORT)
})