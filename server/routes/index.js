import Regiones from '../controllers/region';
import Provincias from '../controllers/provincia';
import Comunas from '../controllers/comuna';
import Estados from '../controllers/estado';
import TipoEstaciones from '../controllers/tipoestacion';
import Networks from '../controllers/network';
import Tipos from '../controllers/tipo';
import Canales from '../controllers/canal';
import Estaciones from '../controllers/estacion';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.get('/api/region', Regiones.list);
  app.post('/api/region', Regiones.create); // API route for user to signup
  app.put('/api/region/:regionId', Regiones.modify); // API route for user to signup

  app.get('/api/provincia', Provincias.list); // API route for user to signup
   app.post('/api/provincia/:regionId', Provincias.create); // API route for user to signup
   app.put('/api/provincia/:provinciaId', Provincias.modify); // API route for user to signup
   app.get('/api/provincia/:regionId', Provincias.getByFk); // API route for user to signup

   app.get('/api/comuna', Comunas.list); // API route for user to signup
   app.post('/api/comuna/:provinciaId', Comunas.create); // API route for user to signup
   app.put('/api/comuna/:comunaId', Comunas.modify); // API route for user to signup
   app.get('/api/comuna/:provinciaId', Comunas.getByFk); // API route for user to signup
   
   app.get('/api/estado', Estados.list); // API route for user to signup
   app.post('/api/estado', Estados.create); // API route for user to signup
   app.put('/api/estado/:estadoId', Estados.modify); // API route for user to signup


   app.get('/api/tipoestacion', TipoEstaciones.list); // API route for user to signup
   app.post('/api/tipoestacion', TipoEstaciones.create); // API route for user to signup
   app.put('/api/tipoestacion/:tipoestacionId', TipoEstaciones.modify); // API route for user to signup
  
   app.get('/api/network', Networks.list); // API route for user to signup
   app.post('/api/network', Networks.create); // API route for user to signup
   app.put('/api/network/:networkId', Networks.modify); // API route for user to signup
   
   app.get('/api/tipo', Tipos.list); // API route for user to signup
   app.post('/api/tipo', Tipos.create); // API route for user to signup
   app.put('/api/tipo/:tipoId', Tipos.modify); // API route for user to signup
   
   app.get('/api/canal', Canales.list); // API route for user to signup
   app.post('/api/canal', Canales.create); // API route for user to signup
   app.put('/api/canal/:canalId', Canales.modify); // API route for user to signup

   // app.get('/api/estacion', Estaciones.list); // API route for user to signup
   app.post('/api/estacion/:comunaId/:estadoId/:networkId/:tipoestacionId', Estaciones.create); // API route for user to signup
   app.put('/api/estacion/:estacionId', Estaciones.modify); // API route for user to signup
   app.get('/api/estacion/fk/:comunaId', Estaciones.getByFk); // API route for user to signup
   app.get('/api/estacion/:lat_ini/:lat_fin/:regionId/:csn/:gnss/:rna', Estaciones.list); // API route for user to signup

   
};