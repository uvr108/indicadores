'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provincia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Provincia.hasMany(models.Comuna, {
        foreignKey: 'provinciaId',
      });
      Provincia.belongsTo(models.Region, {
        foreignKey: 'regionId',
      });
  
    }
  }
  Provincia.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Provincia',
  });
  return Provincia;
};