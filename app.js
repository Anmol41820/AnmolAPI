require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");

const app = express();
const connectDB = require("./db/connect");
// const connectDB = require("./DB/connect");

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));

const PORT = process.env.PORT || 5000 ;
const products_routes = require("./routes/products")


app.get("/", function(req,res){
  res.send("Hi, I am AnmolAPI");
});

app.use("/api/products", products_routes);

const start = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on 5000`);
        });
    }catch(error){
        console.log(error);
    }
};

start();