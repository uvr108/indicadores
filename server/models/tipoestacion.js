'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoEstacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoEstacion.hasMany(models.Estacion, {
        foreignKey: 'tipoestacionId',
      });
    }
  }
  TipoEstacion.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoEstacion',
  });
  return TipoEstacion;
};