
module.exports = function (sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },

        devoured:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        date:{
            type: DataTypes.DATE
        }
        // timestamps: {true}
    });
    return Burger;
};