/**
 * Created by luisvilches on 30-08-17.
 */
const fetch = require('node-fetch');
const config = require('../config/config');
const User =  require('../models/user');

// crea una nueva app en luis.ai
exports.add = (req,res) => {
    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    let data = {
        "name": req.body.name,
        "description": req.body.description,
        "culture": req.body.culture,
        "usageScenario": req.body.scenario,
        "domain": req.body.domain,
        "initialVersionId":"0.1"
    };

    fetch(config.luis.urlMain, {
        method:"POST",
        headers: Header,
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        let data = {
            apiKey: response,
            name: req.body.name,
            description: req.body.description,
            culture: req.body.culture,
            scenario: req.body.scenario,
            domain: req.body.domain,
            version: "0.1"
        };
        
        console.log(response);
        User.findByIdAndUpdate(req.params.id,{$push:{"apps":data}},{safe:true,upsert:true}, (err,result) => {
            if(err){
                return res.status(500).json({state:"Error",message:err});
            } else {
                return res.status(200).json({state:"Success",message:result});
            }
        });
    });
};

// elimina una apps asociada a un usuario
exports.delete = (req,res) =>{

    let Header = {
        "Content-type": "application/json",
        "Ocp-Apim-Subscription-Key": config.luis.api_key
    };

    fetch(`${config.luis.urlMain}/${req.params.appId}`, {
        method:"DELETE",
        headers: Header
    }).then(res => res.json())
    .then(response => {
        console.log(response);
    });

    /*User.findOne({'apps._id': req.params.id}, (err, result) => {
        result.apps.id(req.params.id).remove();
        result.save((err) => {
            if(err) {
                return res.status(500).json({status:"Error",message: err});
            } else {
                return res.status(200).json({status: "Success",message:result});
            }
        });
    });*/
}



