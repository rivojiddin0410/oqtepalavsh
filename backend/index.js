// MERN

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Products = require("./router/products/products")
const Branches = require("./router/branches/Branches")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())


// Connetct MongoDb
mongoose.connect(process.env.MONGODV_URL)
.then(res => console.log("mongo connected"))
.catch(err => console.log("is not connected"))

app.use("/products", Products)
app.use("/branches", Branches)


app.get("/", async(req, res) => {
   res.json("mern stak")
}) 


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))