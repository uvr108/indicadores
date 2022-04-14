'use strict';
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    nombre:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    } ,
    larga: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
      }
    }
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Region',
  });
  Region.associate = function(models) {
    // associations can be defined here
      Region.hasMany(models.Provincia, {
        foreignKey: 'regionId',
      });
      Region.hasMany(models.Estacion, {
        foreignKey: 'regionId',
      });
   }; 
      return Region;
  };
