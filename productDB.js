require("dotenv").config();
const connectDB = require("./db/connect");

const product = require("./models/products");
const productJson = require("./products.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
        await product.create(productJson);
        console.log("success");
    }catch{
        console.log("error");
    }
};

start();