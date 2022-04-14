import model from '../models';

const { Tipo } = model;

class Tipos {


    static list(req, res) {
              return Tipo 
                .findAll()
                .then(tipo => res.status(200).send(tipo));
    }
    static create(req, res) {
         const { nombre } = req.body
         return Tipo 
                  .create({
                    nombre,
                  })
                  .then(tipo => res.status(201).send({
                    message: `Your estado with the nombre ${nombre} has been created successfully `,
                    tipo 
                  }))
                }    

          static modify(req, res) {
              const { nombre } = req.body
              return Tipo 
              .findByPk(req.params.tipoId)
              .then((tipo) => {
                  tipo.update({
                    nombre: nombre || tipo.nombre,
                  })
                  .then((updTipo) => {
                    res.status(200).send({
                      message: 'Tipo updated successfully',
                      data: {
                          nombre: nombre || updEstado.nombre,
                      }
                    })
                  })
                  .catch(error => res.status(400).send(error));
                })
                .catch(error => res.status(400).send(error));
            }

}

export default Tipos;