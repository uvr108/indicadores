'use strict';
module.exports = (sequelize, DataTypes) => {
  const Provincia = sequelize.define('Provincia', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Provincia',
  });
  Provincia.associate = function(models) {
    
    Provincia.hasMany(models.Comuna, {
      foreignKey: 'provinciaId',
    });
    Provincia.belongsTo(models.Region, {
      foreignKey: 'regionId',
    });
  };
  return Provincia;
};
