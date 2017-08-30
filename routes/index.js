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
const addUser = require('../controllers/addUser');
const authMiddleware = require('../middlewares/auth');
const auth = authMiddleware.Authenticated;

Router.get('/', (req,res) => {
    res.sendFile(path.join( __dirname ,'../views/index.html'));
});

Router.post('/signin', body, addUser.addUser);
//Router.post('/login', body, addUser.loginUser);

Router.post('/createApp',auth, body, create.add);
Router.get('/cultures', auth, consultas.cultures);
Router.get('/domains', auth, consultas.domains);
Router.get('/info/:appId', auth, consultas.info);
Router.get('/scenarios', auth, consultas.scenarios);
Router.get('/endpoints/:appId', auth, consultas.endpointsApp);

module.exports = Router;