//import
const express = require("express");
const bodyParser = require("body-parser");
//rest obj
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//routes
app.use("/api/v1/user", require('./routes/userRoutes'))

const PORT = 5000;

//listener
app.listen(PORT, () => {
    console.log(`Server running on PORT =${PORT}`);
})