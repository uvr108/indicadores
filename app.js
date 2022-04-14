import http from 'http'
import express from 'express'

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const hostname = '10.54.223.19';
const port = 3000;
const app = express()
const server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add headers
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   next();
 });

routes(app);

app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to the .',
}));

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
