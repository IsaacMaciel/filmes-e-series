const {Model, DataTypes}  = require('sequelize');

class Genre extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Genre;