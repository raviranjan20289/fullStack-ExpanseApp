const Sequelize = require("sequelize");


const sequelize = new Sequelize('expanse', 'root', 'connectnode', {
    dialect: 'mysql',
    host: 'localhost',

});

module.exports= sequelize;