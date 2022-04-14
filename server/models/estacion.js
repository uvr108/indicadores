'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estacion = sequelize.define('Estacion', {
    codigo: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    latitud: {
      type: DataTypes.DOUBLE,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    longitud: {
      type: DataTypes.DOUBLE,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    altura: {
      type: DataTypes.DOUBLE,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    /*
    referencia: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    */
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Estacion',
  });
  Estacion.associate = function(models) {
    
    Estacion.belongsTo(models.Canal, {
      foreignKey: 'canalId',
    });

    Estacion.belongsTo(models.Tipo, {
      foreignKey: 'tipoId',
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
  };
  return Estacion;
};
