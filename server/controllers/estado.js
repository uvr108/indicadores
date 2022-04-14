import model from '../models';

const { Estado } = model;

class Estados {


    static list(req, res) {
              return Estado 
                .findAll()
                .then(estado => res.status(200).send(estado));
    }
    static create(req, res) {
         const { nombre } = req.body
         return Estado 
                  .create({
                    nombre,
                  })
                  .then(estado => res.status(201).send({
                    message: `Your estado with the nombre ${nombre} has been created successfully `,
                    estado 
                  }))
                }    

          static modify(req, res) {
              const { nombre } = req.body
              return Estado 
              .findByPk(req.params.estadoId)
              .then((estado) => {
                  estado.update({
                    code: code || estado.code,
                    nombre: nombre || estado.nombre,
                    latitud: latitud || estado.latitud,
                    longitud: longitud || estado.longitud,
                    altura: altura || estado.altura,
                    referencia: referencia || estado.referencia,
                  })
                  .then((updatedEstado) => {
                    res.status(200).send({
                      message: 'Estado updated successfully',
                      data: {
                          code: code || updatedEstado.code,
                          nombre: nombre || updatedEstado.nombre,
                          latitud: latitud || updatedEstado.latitud,
                          longitud: longitud || updatedEstado.longitud,
                          altura: altura || updatedEstado.altura,
                          referencia: referencia || updatedEstado.referencia,
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }

}

export default Estados;
