const colors = require('colors');
import app from './app';

// mantenerse escuchando el puerto 4000
app.listen(4000);
console.log(`${ 'Server listening on port'.white } ${ '4000'.blue }`);
