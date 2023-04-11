const Sequelize = require("sequelize");

const sequelize = require("../db/connect");


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Item: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Price: {
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = User;