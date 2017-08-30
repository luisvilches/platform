/**
 * Created by luisvilches on 30-08-17.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let App = new Schema({
    apiKey: String,
    name: String,
    description: String,
    culture: String,
    scenario: String,
    domain: String,
    version: String
});

module.exports = mongoose.model('App',App);