module.exports = function(sequelize, DataTypes){
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    } 

   });

  return burger;
}