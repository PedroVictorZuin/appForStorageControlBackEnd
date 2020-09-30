const express = require('express');
const app = express();
const appConfig = require('./enviroments/enviroment')
const productRoutes = require("./routes/productsRoutes")
const userRoutes = require("./routes/userRoutes")
const simpleRoutes = require("./routes/simpleRoutes")
const bodyparser = require('body-parser')



// Declaration the Packeges 

            // support parsing of application/json type post data
            app.use(bodyparser.json());

            //support parsing of application/x-www-form-urlencoded post data
            app.use(bodyparser.urlencoded({ extended: true }));
    
    // End Declaration the Packeges 

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