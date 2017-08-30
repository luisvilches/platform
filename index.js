/**
 * Created by luisvilches on 30-08-17.
 */
const express =  require('express');
const cors = require('cors');
const app = express();
const config = require('./config/config');
const routes = require('./routes/index');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.static('public'));
app.use('/', routes);
console.log(config.db.mongolab);
mongoose.connect(config.db.mongolab, err => {
    if(err){
        console.log('Errores: ', err);
    } else {
        console.log('Conection database success');
    }
});
app.listen(config.server.port, err => {
    if(err){
        console.log('Errores: ', err);
    } else {
        console.log('Server running in port ', config.server.port);
    }
});