/**
 * Created by luisvilches on 30-08-17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    rut: String,
    name: String,
    apellido: String,
    mail: String,
    phone: String,
    username: String,
    password:String,
    apps:[
        {
            apiKey: String,
            name: String,
            description: String,
            culture: String,
            scenario: String,
            domain: String,
            version: String
        }
    ]
});

module.exports = mongoose.model('User',User);