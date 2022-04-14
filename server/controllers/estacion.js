import model from '../models';
const { Estacion, Estado, Network, TipoEstacion, Tipo, Canal, Region } = model;

class Estaciones {


    static list(req, res) {
         const { Op } = require("sequelize");
         return Estacion 
         .findAll( { where: { latitud : {[Op.lte]: -20 }, networkId: { [Op.in]: [1,3,11] }, [Op.not]: { estadoId: [5,10] }, tipoestacionId:{ [Op.in]: [1,5]}}, 
          attributes: ['id', 'codigo','nombre','altura','latitud','longitud'] , 
          order: [['latitud','DESC']],
          include: [ { model:Estado, attributes:['nombre'], where: { } },
                     { model:Network, attributes:['nombre'], where: { } },
                     { model:TipoEstacion, attributes:['nombre'], where: { } },
                     { model:Tipo, attributes:['nombre'], where: { } },
                     { model:Canal, attributes:['nombre'], where: { } },
                     { model:Region, attributes:['nombre'], where: { } },
                   ] }  )
         .then(estacion => res.status(200).send(estacion));
    }

    static latitud(req, res) {
         const { Op } = require("sequelize");
         const { lat_ini, lat_fin } = req.params;
         console.log('XXX->', lat_ini, lat_fin);
         return Estacion 
         .findAll( { where: { latitud : {[Op.between]: [lat_fin, lat_ini] }, networkId: { [Op.in]: [1,3,11] }, [Op.not]: { estadoId: [5,10] }, tipoestacionId:{ [Op.in]: [1,5]} }, 
          attributes: ['id', 'codigo','nombre','altura','latitud','longitud'] , 
          order: [['latitud','DESC']],
          include: [ { model:Estado, attributes:['nombre'], where: { } },
                     { model:Network, attributes:['nombre'], where: { } },
                     { model:TipoEstacion, attributes:['nombre'], where: { } },
                     { model:Tipo, attributes:['nombre'], where: { } },
                     { model:Canal, attributes:['nombre'], where: { } },
                     { model:Region, attributes:['nombre'], where: { } },
                   ] }  )
         .then(estacion => res.status(200).send(estacion));
    }


    static create(req, res) {
         const { codigo, nombre, latitud, longitud, altura, referencia } = req.body;
         const { comunaId, estadoId, networkId, tipoestacionId } = req.params;
         return Estacion 
               .create({
                 codigo, 
                 nombre, 
                 latitud, 
                 longitud, 
                 altura, 
                 referencia,
                 comunaId, 
                 estadoId, 
                 networkId, 
                 tipoestacionId 
               })
               .then(estacion => res.status(201).send({
                 message: `Your estacion with the nombre ${nombre} has been created successfully `,
                 estacion 
               }))
         }

       static modify(req, res) {
          const { codigo, nombre, latitud, longitud, altura, referencia } = req.body;
          return Estacion 
          .findByPk(req.params.estacionId)
          .then((estacion) => {
                   estacion.update({
                     codigo: codigo  || estacion.codigo,
                     nombre: nombre || estacion.nombre,
                   })
                   .then((updatedProvincia) => {
                     res.status(200).send({
                       message: 'Provincia updated successfully',
                       data: {
                         nombre: nombre || updatedProvincia.nombre,
                       }
                     })
                   })
                   .catch(error => res.status(400).send(error));
                 })
                 .catch(error => res.status(400).send(error));
             }
        static getByFk(req, res) {
            return Estacion 
              .findAll({ where : { comunaId: req.params.comunaId},
                attributes: ['id','code','nombre','latitud','longitud','altura','referencia','comunaId','tipoestacionId','estadoId','networkId'],  order: [
                ['id', 'ASC']
              ]})
              .then(estaciones => res.status(200).send(estaciones));
        }

}

export default Estaciones;
