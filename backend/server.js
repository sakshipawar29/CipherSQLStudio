const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const assignmentRoutes = require("./routes/assignmentRoutes")
const queryRoutes = require("./routes/queryRoutes")
const hintRoutes = require("./routes/hintRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/assignments", assignmentRoutes)
app.use("/api/query", queryRoutes)
app.use("/api/hint", hintRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongo connected"))

app.listen(process.env.PORT, ()=>{
 console.log("Server running")
})