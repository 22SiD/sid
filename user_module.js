const mongoose = require("mongoose");
const conn_str = "mongodb+srv://sid:root@cluster0.xrrg4.mongodb.net/tcet?retryWrites=true&w=majority"

mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
    .then( () => console.log("Connected successfully...") )
    .catch( (err) => console.log(err) );

const orderSchema = new mongoose.Schema({
  "name": String,
  "age": String,
  "city": String
      }
  
);

const orderModel = new mongoose.model("carrrs", orderSchema);

exports.order = orderModel;
