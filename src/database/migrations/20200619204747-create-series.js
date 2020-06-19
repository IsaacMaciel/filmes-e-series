'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('series',{
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
     },
     name: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     genre_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'genres', key:'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,     
    },
     overview:{
       type: Sequelize.STRING,
     },
     status:{
       type: Sequelize.STRING
     },
     created_at: {
       type: Sequelize.DATE,
       allowNull: false,
     },
     updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
     
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('series');
  }
};
