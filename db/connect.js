const mongoose = require('mongoose');

// uri ="mongodb+srv://anmolgupta41820:ubhX5p0RpacYsQ31@anmolapi.scrc9j7.mongodb.net/";

const connectDB = (uri) =>{
  return mongoose.connect(uri,{
    useNewURLParser: true,
    useUnifiedTopology: true,
  }).then(console.log("mongodb connected to my server"))
  .catch((err) => console.log(err));
};

module.exports = connectDB;