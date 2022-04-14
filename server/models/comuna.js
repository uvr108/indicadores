'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comuna = sequelize.define('Comuna', {
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
    tableName: 'Comuna',
  });
  Comuna.associate = function(models) {
    /*
    Comuna.hasMany(models.Estacion, {
      foreignKey: 'comunaId',
    });
    */
    Comuna.belongsTo(models.Provincia, {
      foreignKey: 'provinciaId',
    });
  };
  return Comuna;
};
