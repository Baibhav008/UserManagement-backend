//MONGOOSE CONNECTION TO DATABASE 1.0-------------------------------------------------------

const express = require("express"); //ADDING EXPRESS CODING
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const studentRoute = require("./controller/studentRoute");
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://baibhav:baibhav1234@cluster0.akywalj.mongodb.net/schoolDB");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//MIDDLEWARE--------------------------
app.use("/studentRoute",studentRoute);


app.listen(4000,()=>{
    console.log("Server started at 40000");
})
//---------------------------------------------------------------------------