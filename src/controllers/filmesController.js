const {
    request
} = require("express")
const filmesJson = require("../models/filmes.json") //chamando o Json de filmes

//GET
const getAll = (request, response) => { //filmes

    response.status(200).json([{
        "Filmes": filmesJson
    }]) //retorna todos os filmes

}

const getById = (req, res) => { //filmes/busca/:id

    let idReq = req.params.id
    let idEncontrado = filmesJson.find(filme => filme.id == idReq)

    if (idEncontrado == undefined) {
        res.status(404).send({
            message: 'Filme não encontrado'
        })

    }

    res.status(200).send(idEncontrado) //retorna filme pelo Id 

}

const getByTitle = (req, res) => { //filmes/busca?Title

    let titleReq = req.query.Title.toLocaleLowerCase();
    let titleEncontrado = filmesJson.filter((filme) => filme.Title.toLocaleLowerCase().includes(titleReq));

    res.status(200).send(titleEncontrado)

}

const getFiltrar = (req, res)=>{//filmes/filtrar?Genre

    let genreReq = req.query.Genre.toLocaleLowerCase();
    let genreEncontrado = filmesJson.filter((filme) => filme.Genre.toLocaleLowerCase().includes(genreReq));

    res.status(200).send(genreEncontrado)

}


//POST
const createMovie = (req, res) => { //cria um novo elemento

    const body = req.body

    let newMovie = {

        id: (filmesJson.length) + 1,
        Title: body.Title,
        Year: body.Year,
        Rated: body.Rated,
        Released: body.Released,
        Runtime: body.Runtime,
        Genre: body.Genre,
        Director: body.Director,
        writer: body.Writer,
        Actors: body.Actors,
        Plot: body.Plot,
        Language: body.Language,
        Country: body.Country,
        Awards: body.Awards,
    }

    filmesJson.push(newMovie)

    res.status(201).send({
        message: 'Filme adicionado com sucesso',
        newMovie
    })
}

//PATCH 


















module.exports = {
    getAll,
    getById,
    getByTitle,
    getFiltrar,
    createMovie,
    
}