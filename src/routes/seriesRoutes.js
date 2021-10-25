const controller = require("../controllers/seriesController")

const express = require("express")

const router = express.Router()

router.get("/", controller.getAll)//series

router.get("/:id", controller.getById)//series/4

router.get("/:Title", controller.getByTitle)//series/titulo

module.exports = router