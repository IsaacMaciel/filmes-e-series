const {Model, DataTypes}  = require('sequelize');

class Serie extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            overview: DataTypes.STRING,
            poster: DataTypes.STRING,
            background: DataTypes.STRING,
            status: DataTypes.STRING,
        },{
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Genre, {foreignKey:'genre_id', as:'genre'})
    }
}

module.exports = Serie;