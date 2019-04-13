const express = require('express')
const massive = require("massive");
const controller = require("./controllers/controller")
require("dotenv").config();
const app = express();

app.use(express.json())

const{SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db",dbInstance);
    dbInstance.init()
    console.log("Hey bro-tater we a re connnected")
})

app.get("/api/houses", controller.getHouses)
app.post("/api/houses",controller.addHouse)
app.delete("/api/houses/:id", controller.deleteHouse)

app.listen(SERVER_PORT || 4550, () => console.log(`dont drop that thun-thu-thun ${SERVER_PORT}`))