'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Canal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Canal.hasMany(models.Estacion, {
        foreignKey: 'canalId',
      });
    }
  }
  Canal.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Canal',
  });
  return Canal;
};