const Serie = require('../models/Series');
const Genre = require('../models/Genre');
const { response } = require('express');

module.exports = {
    async store(req,res) {
        try {
            const
            {
                name,
                genre_id,
                overview,
                status,
                poster,
                background
            } = req.body
    
            const {dataValues}= await Genre.findByPk(genre_id);
            
            
                
                const genre = dataValues.name;
        
                console.log(genre);
        
                const serie = await Serie.create({
                    name,
                    genre_id,
                    poster,
                    background,
                    overview,
                    status,
                });
                
                return res.json(serie)
            
        } catch (error) {
            return res.status(400).json({error: 'Houve um erro inesperado no cadastro de série'});
            
        }
        


    },
    async find(req,res) {
      const { id } = req.params;

      const serie =  await Serie.findByPk(id)

      return res.json(serie);

    },
    async index (req,res) {
        const allSerie = await Serie.findAll();
        
        return res.json(allSerie)
    }
}