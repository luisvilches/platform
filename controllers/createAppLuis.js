/**
 * Created by luisvilches on 30-08-17.
 */
const fetch = require('node-fetch');
const config = require('../config/config');
const App =  require('../models/app');

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
        let data = new App({
            apiKey: response,
            name: req.body.name,
            description: req.body.description,
            culture: req.body.culture,
            scenario: req.body.scenario,
            domain: req.body.domain,
            version: "0.1"
        });

        data.save((err,result) => {
            if(err){
                return res.status(500).json({state:"error",message:err});
            } else {
                return res.status(200).json({state:"success",message:result});
            }
        });
    });
};







