import model from '../models';

const { Region } = model;

class Regiones {


    static list(req, res) {
              return Region 
                .findAll({ order: [['id','ASC']], })
                .then(region => res.status(200).send(region));
    }
    static create(req, res) {
         const { nombre, larga } = req.body
         return Region 
                  .create({
                    nombre,
                    larga
                  })
                  .then(region => res.status(201).send({
                    message: `Your region with the nombre ${nombre} has been created successfully `,
                    region 
                  }))
                }    


          static modify(req, res) {
              const { nombre, larga } = req.body
              return Region 
              .findByPk(req.params.regionId)
              .then((region) => {
                  region.update({
                    nombre: nombre || region.nombre,
                    larga: larga || region.larga,
                  })
                  .then((updatedRegion) => {
                    res.status(200).send({
                      message: 'Region updated successfully',
                      data: {
                        nombre: nombre || updatedRegion.nombre,
                        nombre: larga || updatedRegion.larga,
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }

     }




export default Regiones;
