'use strict';
module.exports = (sequelize, DataTypes) => {
  const Canal = sequelize.define('Canal', {
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
    tableName: 'Canal',
  });
  Canal.associate = function(models) {
 
    Canal.hasMany(models.Estacion, {
      foreignKey: 'canalId',
    });
  };
  
  return Canal;

};
