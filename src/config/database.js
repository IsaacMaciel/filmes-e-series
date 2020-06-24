const path = require('path');
module.exports = {
    dialect: 'sqlite',
    storage:path.resolve('src','config','database.sqlite'),
    // host: 'localhost',
    // username: 'postgres',
    // password: 'docker',
    // database: 'series',
    define: {
        timestamps: true,
        underscored:true,
    },
};