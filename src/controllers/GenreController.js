const Genre = require('../models/Genre');


const { findByPk } = require('../models/Genre');
module.exports = {
    async store(req,res){
        const { name } = req.body;

        const genre = await Genre.create({name});

        return res.json(genre)
    },
    async index(req,res) {

        const allGenres = await Genre.findAll();
        
        return res.json(allGenres)
    },

    async find (req,res) {
        const { genre_id } = req.params;

        const seriesForGender = await Genre.findByPk(genre_id,{include: { association: 'genre'}})
 
         
         if(!seriesForGender) {
             res.status(401)
             res.send({ error: true })
         } else {
             return res.json(seriesForGender);
 
         }
    }
 
};