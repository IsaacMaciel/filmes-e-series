const {Model, DataTypes}  = require('sequelize');

class Genre extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        },{
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Serie,{foreignKey:'genre_id', as:'genre_for_serie'})
    }
}

module.exports = Genre;