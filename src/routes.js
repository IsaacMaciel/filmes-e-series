const express = require('express');
const GenreController = require('./controllers/GenreController');
const SerieControleer = require('./controllers/SeriesController');

const routes = express.Router();

routes.get('/',(req,res) => {
    res.json({
        "message":"Ola tudo bem:?"
    })
})

routes.get('/genres',GenreController.index)
routes.post('/genres',GenreController.store)

routes.post('/series',SerieControleer.store)

module.exports = routes;