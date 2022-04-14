'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoEstacion = sequelize.define('TipoEstacion', {
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
    tableName: 'TipoEstacion',
  });
  TipoEstacion.associate = function(models) {
 
    TipoEstacion.hasMany(models.Estacion, {
      foreignKey: 'tipoestacionId',
    });
  };
  
  return TipoEstacion;

};
