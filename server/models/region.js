'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Region.hasMany(models.Provincia, {
        foreignKey: 'regionId',
      });
      Region.hasMany(models.Estacion, {
        foreignKey: 'regionId',
      });
    }
  }
  Region.init({
    nombre: DataTypes.STRING,
    larga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Region',
  });
  return Region;
};