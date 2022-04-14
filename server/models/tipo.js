'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipo = sequelize.define('Tipo', {
    nombre:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    } ,
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Tipo',
  });
  Tipo.associate = function(models) {
 
    Tipo.hasMany(models.Estacion, {
      foreignKey: 'tipoId',
    });
  };
  
  return Tipo;

};
