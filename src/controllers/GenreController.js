const Genre = require('../models/Genre');
module.exports = {
    async store(req,res){
        const { name } = req.body;

        const genre = await Genre.create({name});

        return res.json(genre)
    },
    async index(req,res) {

        const allGenres = await Genre.findAll();
        
        return res.json(allGenres)
    }
};