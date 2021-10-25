const seriesJson = require('../models/series.json')


const getAll = (req, res) => {//series

    res.status(200).send(seriesJson)
}
//listar series por id req.query
/*const getById = (req, res) => {

    let idReq = req.query.id

    let idEncontrado = seriesJson.find(serie => serie.id == idReq)

    if (idEncontrado == undefined) {
        res.status(404).send({
            message: 'Série não encontrada'
        })

    }

    res.status(200).send(idEncontrado)
}*/
const getById = (req, res) => { //series/:id

    let idReq = req.params.id
    let idEncontrado = seriesJson.find(serie => serie.id == idReq)

    if (idEncontrado == undefined) {
        res.status(404).send({
            message: 'Serie não encontrada'
        })

    }

    res.status(200).send(idEncontrado) 

}
const getByTitle = (req, res) => {

    let titleReq = req.params.Title.toLocaleLowerCase();

    let titleEncontrado = seriesJson.filter((serie) => serie.Title.toLocaleLowerCase().includes(titleReq));

    res.status(200).send(titleEncontrado)
}





module.exports = {
    getAll,
    getById,
    getByTitle

}




