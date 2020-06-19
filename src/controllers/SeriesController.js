const Serie = require('../models/Series');
const Genre = require('../models/Genre');

module.exports = {
    async store(req,res) {
        const
        {
            name,
            genre_id,
            overview,
            status
        } = req.body

        const {dataValues}= await Genre.findByPk(genre_id);

        const genre = dataValues.name;

        console.log(genre);

        const serie = await Serie.create({
            name,
            genre_id,
            genre,
            overview,
            status
        })
        
        return res.json(serie)
    }
}