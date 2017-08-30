/**
 * Created by cardumen on 30-08-17.
 */
const fetch = require('node-fetch');
const config = require('../config/config');

// devuelve un objeto con todas las culturas disponibles
exports.cultures =(req,res) => {
    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    fetch(config.luis.urlCulture,{
        method: "GET",
        headers: Header
    })
        .then(res => res.json())
        .then(response => {
            return res.status(200).json(response);
        });
};
// devuelve un array con todos los dominios disponibles
exports.domains =(req,res) => {
    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    fetch(config.luis.urlDomains,{
        method: "GET",
        headers: Header
    })
        .then(res => res.json())
        .then(response => {
            return res.status(200).json(response);
        });
};

// devuelve un array con todos los escenarios disponibles
exports.scenarios =(req,res) => {
    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    fetch(config.luis.urlEscenarios,{
        method: "GET",
        headers: Header
    })
        .then(res => res.json())
        .then(response => {
            return res.status(200).json(response);
        });
};

// devuelve los endpoints de una app
exports.endpointsApp = (req,res) => {
    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    fetch(`${config.luis.urlMain}/${req.params.appId}/endpoints`, {
        method: "GET",
        headers: Header
    })
        .then(res => res.json())
        .then(response => {
            return res.status(200).json(response);
        });
};

// devuelve un objeto con la informacion de la app solicitada
exports.info = (req,res) => {
    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    fetch(`${config.luis.urlMain}/${req.params.appId}`, {
        method: "GET",
        headers: Header
    })
        .then(res => res.json())
        .then(response => {
            return res.status(200).json(response);
        });
};