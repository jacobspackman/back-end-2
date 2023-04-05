const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const housesController = require("./controller.js")
const { getHouses, createHouses, updateHouses, deleteHouses } = housesController

app.get("/api/houses", getHouses)
app.post("/api/houses", createHouses)
app.put("/api/houses/:id", updateHouses)
app.delete("/api/houses/:id", deleteHouses)



app.listen(4004, (req, res) => {
    console.log('4000 is up')
})