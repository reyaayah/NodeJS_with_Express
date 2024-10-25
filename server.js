//import
const express = require("express");
const bodyParser = require("body-parser");
//rest obj
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


//rest apis /routes /endpoint
app.get("/", (req, res) => {
    res.send("<h1>This is Riya Awal</h1>");
});

//post method
app.post("/contactform", (req, res) => {
    const { inputData } = req.body;

    res.json({
        success: true,
        message: `This is ${inputData}`,
    });
});

const PORT = 5000;

//listener
app.listen(PORT, () => {
    console.log(`Server running on PORT =${PORT}`);
})