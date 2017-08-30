/**
 * Created by luisvilches on 30-08-17.
 */

module.exports = {
    server: {
        port: process.env.PORT || 5000,
    },
    db:{
        name:"",
        user:"",
        pass:"",
        host:"",
        port:"",
        mongolab: "mongodb://innovabots:innovabots@ds163613.mlab.com:63613/innovabots"

    },
    luis: {
        api_key: "a34b73319aa64f55b0ce25641a1a2da0",
        urlMain: "https://westus.api.cognitive.microsoft.com/luis/api/v2.0/apps/",
        urlCulture: "https://westus.api.cognitive.microsoft.com/luis/api/v2.0/apps/cultures",
        urlDomains: "https://westus.api.cognitive.microsoft.com/luis/api/v2.0/apps/domains",
        urlEscenarios: "https://westus.api.cognitive.microsoft.com/luis/api/v2.0/apps/usagescenarios",
    }
};