const controller = require('../controllers/filmesController')

const express = require("express")

const router = express.Router()

router.get("", controller.getAll) //filmes

router.get("/buscar/:id", controller.getById) //filmes/buscar/5

router.get("/buscar?", controller.getByTitle) //filmes/buscar?Title=Avatar

router.get("/filtrar?", controller.getFiltrar);//filmes/filtrar?Genre=

router.post("/criar",controller.createMovie)//filmes/criar


module.exports = router