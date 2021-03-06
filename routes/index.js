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
const autenticacion = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');
const auth = authMiddleware.Authenticated;

Router.get('/', (req,res) => {
    res.sendFile(path.join( __dirname ,'../views/index.html'));
});

// rutas relacionadas a las cuentas de usuarios
Router.post('/user/create', body, addUser.addUser);
Router.put('/user/update/:id', auth,body,addUser.updateUser);
Router.delete('/user/delete/:id', auth,body,addUser.deleteUser);
Router.get('/user/all', auth,body,addUser.find);
Router.put('/user/find/:id', auth,body,addUser.findId);

// login de usuario
Router.post('/login', body, autenticacion.auth);

// rutas relacionadas a las apps de luis.ai
Router.post('/createApp/:id',auth, body, create.add);
Router.delete('/deleteApp/:appId',auth, body, create.delete);

// rutas relacionadas a las busquedas
Router.get('/cultures', auth, consultas.cultures);
Router.get('/domains', auth, consultas.domains);
Router.get('/info/:appId', auth, consultas.info);
Router.get('/scenarios', auth, consultas.scenarios);
Router.get('/endpoints/:appId', auth, consultas.endpointsApp);

module.exports = Router;