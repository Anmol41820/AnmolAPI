const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: (true,"Price must be in numbers!!"),
    },
    feature:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.4,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,
        },

    }
});


module.exports = mongoose.model("Product",productSchema);