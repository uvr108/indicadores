'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Estacion.belongsTo(models.Canal, {
        foreignKey: 'canalId',
      });
      Estacion.belongsTo(models.Region, {
        foreignKey: 'regionId',
      });
      Estacion.belongsTo(models.Estado, {
        foreignKey: 'estadoId',
      });
      Estacion.belongsTo(models.TipoEstacion, {
        foreignKey: 'tipoestacionId',
      });
      Estacion.belongsTo(models.Network, {
        foreignKey: 'networkId',
      });
  
    }
  }
  Estacion.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    latitud: DataTypes.DOUBLE,
    longitud: DataTypes.DOUBLE,
    altura: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Estacion',
  });
  return Estacion;
};