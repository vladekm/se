var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;

api.get('/', function (request) {
    return 'Hi there baby' + request.queryString.name;
});


api.get('/people/{name}', function (request){
    return 'Yes, ' + request.pathParams.name;
});
