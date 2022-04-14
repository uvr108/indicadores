import model from '../models';

const { Provincia } = model;

class Provincias {


    static list(req, res) {
              return Provincia 
                .findAll()
                .then(provincia => res.status(200).send(provincia));
    }
    static create(req, res) {
         const { nombre } = req.body;
         const { regionId } = req.params;
         return Provincia 
                  .create({
                    nombre,
                    regionId
                  })
                  .then(provincia => res.status(201).send({
                    message: `Your provincia with the nombre ${nombre} has been created successfully `,
                    provincia 
                  }))
                } 
   
       static modify(req, res) {
          const { nombre } = req.body
          return Provincia 
          .findByPk(req.params.provinciaId)
          .then((provincia) => {
                   provincia.update({
                     nombre: nombre || provincia.nombre,
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
            return Provincia 
              .findAll({ where : { regionId: req.params.regionId}, 
                attributes: ['id','nombre','regionId'],  order: [
                ['id', 'ASC']
              ]})
              .then(subitems => res.status(200).send(subitems));
        }

}

export default Provincias;
