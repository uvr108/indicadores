'use strict';
module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define('Network', {
    nombre:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    } ,
    descripcion:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your descripcion'
      }
    } ,
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Network',
  });
  Network.associate = function(models) {
 
    Network.hasMany(models.Estacion, {
      foreignKey: 'networkId',
    });
  };
  
  return Network;

};
