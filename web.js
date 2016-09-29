var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;


api.get('/info', function (){
    return {
        "name": "Tom the Tank",
        "owner": "Sean and Vlad"
    }
});

api.get('/command', function (){
    return {
        command: 'fire'
    }

});


api.get('/', function (request) {
    return 'Hi there baby' + request.queryString.name;
});


api.get('/people/{name}', function (request){
    return 'Yes, ' + request.pathParams.name;
});
