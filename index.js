const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const createUrl = require("./Routes/createUrl");
const findUrl = require("./Routes/findUrl");

const cors = require("cors")
dotenv.config();
//Connect Databasek
mongoose.connect(process.env.MONGO_URL,{dbName:"UrlShortnerProject"}) 
.then(() => console.log("DB coneection sucessful"))
.catch((err) => {
    console.log(err);
})

//Cors Policy, Middleware & Routing paths
app.use(cors());
app.use(express.json());

//Routing
app.use("/createUrl", createUrl );
app.use("/findUrl", findUrl );

//Express port assigning
app.listen(process.env.PORT || 5000, () =>{
    console.log("Back-end is running")
})