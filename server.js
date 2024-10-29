//import
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

//configure dotenv
dotenv.config();
//rest obj
const app = express();

//middlewares
app.use(express.json()); //to receive json data
app.use(bodyParser.urlencoded({ extended: false }));
//routes
app.use("/api/v1/user", require('./routes/userRoutes'))

const PORT = process.env.PORT || 5000;

//conditionally listen
mySqlPool.query('SELECT 1').then(() => {
    //MySql
    console.log('MySql DB Connected');
    //listener
    app.listen(PORT, () => {
        console.log(`Server running on PORT = ${process.env.PORT}`);
    })

})
