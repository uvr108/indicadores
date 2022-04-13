'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      latitud: {
        type: Sequelize.DOUBLE
      },
      longitud: {
        type: Sequelize.DOUBLE
      },
      altura: {
        type: Sequelize.DOUBLE
      },
      regionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Region',
          key: 'id',
          as: 'regionId',
        }
      },
      tipoestacionId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'TipoEstacion',
          key: 'id',
          as: 'tipoestacionId',
        }
      },
      estadoId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Estado',
          key: 'id',
          as: 'estadoId',
        }
      },
      networkId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Network',
          key: 'id',
          as: 'networkId',
        }
      },
      tipoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Tipo',
          key: 'id',
          as: 'tipoId',
        }
      },
      canalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Canal',
          key: 'id',
          as: 'canalId',
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estacion');
  }
};