const {Model, DataTypes}  = require('sequelize');

class Serie extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            genre_id: DataTypes.INTEGER,
            overview: DataTypes.STRING,
            status: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Serie;