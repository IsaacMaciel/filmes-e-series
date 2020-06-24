const express = require('express');
const GenreController = require('./controllers/GenreController');
const SerieControleer = require('./controllers/SeriesController');

const routes = express.Router();

routes.get('/',(req,res) => {
    res.json({
        "message":"Ola tudo bem:?"
    })
})

routes.post('/genres',GenreController.store)
routes.get('/genres',GenreController.index)
routes.get('/genres/:id',GenreController.find)

// routes.get('/genres/:id',GenreController.find)

routes.post('/series',SerieControleer.store)
routes.put('/series',SerieControleer.edit)
routes.delete('/series',SerieControleer.delete)
routes.get('/series',SerieControleer.index)
routes.get('/series/:id',SerieControleer.find)


module.exports = routes;