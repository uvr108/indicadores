import model from '../models';

const { Canal } = model;

class Canales {


    static list(req, res) {
              return Canal 
                .findAll()
                .then(Canal => res.status(200).send(Canal));
    }
    static create(req, res) {
         const { nombre } = req.body
         return Canal 
                  .create({
                    nombre,
                  })
                  .then(Canal => res.status(201).send({
                    message: `Your Canal with the nombre ${nombre} has been created successfully `,
                    Canal 
                  }))
                }    

          static modify(req, res) {
              const { nombre } = req.body
              return Canal 
              .findByPk(req.params.CanalId)
              .then((Canal) => {
                  Canal.update({
                    nombre: nombre || Canal.nombre,
                  })
                  .then((updatedCanal) => {
                    res.status(200).send({
                      message: 'Canal updated successfully',
                      data: {
                          nombre: nombre || updatedCanal.nombre,
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }

}

export default Canales;