const env = require('dotenv')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const ItemRoutes = require('./Routes/ItemRoutes')
const UtilsRoutes = require('./Routes/UtilsRoutes')

env.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/item', ItemRoutes);
app.use('/utils', UtilsRoutes)

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=> app.listen(process.env.PORT,()=>{
    console.log("listening to port 8000")
    console.log("connected to db")
})).catch((err)=>{
    console.log(err)
})




