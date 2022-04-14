import model from '../models';

const { Comuna } = model;

class Comunas {


    static list(req, res) {
              return Comuna 
                .findAll()
                .then(comuna => res.status(200).send(comuna));
    }
    static create(req, res) {
         const { nombre } = req.body;
         const { provinciaId } = req.params;
         return Comuna 
                  .create({
                    nombre,
                    provinciaId,
                  })
                  .then(comuna => res.status(201).send({
                    message: `Your comuna with the nombre ${nombre} has been created successfully `,
                    comuna 
                  }))
                }    

     static modify(req, res) {
          const { nombre } = req.body
          return Comuna 
          .findByPk(req.params.comunaId)
          .then((comuna) => {
                   comuna.update({
                     nombre: nombre || comuna.nombre,
                   })
                   .then((updatedComuna) => {
                     res.status(200).send({
                       message: 'Comuna updated successfully',
                       data: {
                         nombre: nombre || updatedComuna.nombre,
                       }
                     })
                   })
                   .catch(error => res.status(400).send(error));
                 })
                 .catch(error => res.status(400).send(error));
             }

        static getByFk(req, res) {
            return Comuna 
              .findAll({ where : { provinciaId: req.params.provinciaId},
                attributes: ['id','nombre','provinciaId'],  order: [
                ['id', 'ASC']
              ]})
              .then(subitems => res.status(200).send(subitems));
        }


}

export default Comunas;
