import model from '../models';

const { TipoEstacion } = model;

class TipoEstaciones {


    static list(req, res) {
              return TipoEstacion 
                .findAll()
                .then(tipoestacion => res.status(200).send(tipoestacion));
    }
    static create(req, res) {
         const { nombre } = req.body
         return TipoEstacion 
                  .create({
                    nombre,
                  })
                  .then(tipoestacion => res.status(201).send({
                    message: `Your TipoEstacion with the nombre ${nombre} has been created successfully `,
                    tipoestacion 
                  }))
                }    

          static modify(req, res) {
              const { nombre } = req.body
              return TipoEstacion 
              .findByPk(req.params.tipoestacionId)
              .then((tipoestacion) => {
                  tipoestacion.update({
                    nombre: nombre || tipoestacion.nombre,
                  })
                  .then((updatedTipoEstacion) => {
                    res.status(200).send({
                      message: 'TipoEstacion updated successfully',
                      data: {
                        nombre: nombre || updatedTipoEstacion.nombre,
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }

}

export default TipoEstaciones;
