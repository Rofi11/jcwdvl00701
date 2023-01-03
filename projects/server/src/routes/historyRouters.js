const express = require("express")
const {historyController} = require("../controller")

const routers = express.Router()

routers.get("/get-history" , historyController.getHistory)
routers.patch("/cancel-history" , historyController.cancelReservation)

module.exports = routers