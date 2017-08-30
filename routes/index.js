/**
 * Created by luisvilches on 30-08-17.
 */
const express = require('express');
const Router = express.Router();
const multiparty = require('connect-multiparty');
const body = multiparty();
const formidable = require('formidable');
const path = require('path');
const create = require('../controllers/createAppLuis');
const consultas = require('../controllers/consultas');

Router.get('/', (req,res) => {
    res.sendFile(path.join( __dirname ,'../views/index.html'));
});

Router.post('/createApp',body, create.add);
Router.get('/cultures', consultas.cultures);
Router.get('/domains', consultas.domains);
Router.get('/info/:appId', consultas.info);
Router.get('/scenarios', consultas.scenarios);
Router.get('/endpoints/:appId', consultas.endpointsApp);

module.exports = Router;