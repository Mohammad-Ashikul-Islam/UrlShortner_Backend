const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors")
dotenv.config();
//Connect Database
//In case of running locally, Please Replace the env Url with my Url link from commented below or Your custom MongoDB Url link
mongoose.connect(process.env.MONGO_URL,{dbName:"UrlShortnerProject"}) //MONGO_URL = mongodb+srv://UrlShortner:UrlShortner1234@cluster1.4px0nat.mongodb.net/?retryWrites=true&w=majority
.then(() => console.log("DB coneection sucessful"))
.catch((err) => {
    console.log(err);
})

//Cors Policy, Middleware & Routing paths
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () =>{
    console.log("Back-end is running")
})