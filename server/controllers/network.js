import model from '../models';

const { Network } = model;

class Networks {


    static list(req, res) {
              return Network 
                .findAll()
                .then(network => res.status(200).send(network));
    }
    static create(req, res) {
         const { nombre, descripcion } = req.body
         return Network 
                  .create({
                    nombre,
                    descripcion
                  })
                  .then(network => res.status(201).send({
                    message: `Your network with the nombre ${nombre} has been created successfully `,
                    network 
                  }))
                }    
          static modify(req, res) {
              const { nombre, descripcion } = req.body
              return Network 
              .findByPk(req.params.networkId)
              .then((network) => {
                  network.update({
                    nombre: nombre || network.nombre,
                    descripcion: descripcion || network.nombre,
                  })
                  .then((updatedNetwork) => {
                    res.status(200).send({
                      message: 'Network updated successfully',
                      data: {
                        nombre: nombre || updatedNetwork.nombre,
                        descripcion: descripcion || updatedNetwork.nombre,
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }


}

export default Networks;
