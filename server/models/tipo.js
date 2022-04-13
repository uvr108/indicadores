'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tipo.hasMany(models.Estacion, {
        foreignKey: 'tipoId',
      });
    }
  }
  Tipo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo',
  });
  return Tipo;
};