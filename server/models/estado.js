'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    nombre:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    } 
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Estado',
  });
  Estado.associate = function(models) {
 
    Estado.hasMany(models.Estacion, {
      foreignKey: 'estadoId',
    });
  };
  
  return Estado;

};
