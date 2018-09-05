'use strict';

// const Hapi = require('hapi');
// const inert = require('inert');
// const env = process.env;


// // Create a server with a host and port
// const server = new Hapi.Server();

// // var host = env.NODE_IP || 'localhost';
// var port = env.PORT || 3000;

// server.connection({
//     port: port
// });

// server.register([{
//     register: inert,
//     options: {}
// }], (err) => {
//     if (err) {
//         console.error(err);
//         throw err;
//     }

//     //Serving static files
//     server.route({
//         method: 'GET',
//         path: '/{param*}',
//         handler: {
//             directory: {
//                 path: 'dist'
//             }
//         }
//     });

 

//     server.start((err) => console.log('Server started at:', server.info.uri));
// });


const express = require('express');
const app = express();
const port = env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Server On');
});
app.use('/', express.static(__dirname + '/dist'));

app.listen(port, function () {
  console.log('Listening on port:' + port);
});
