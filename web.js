var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;


api.get('/info', function (request){
    return {
        "name": "Tom the Tank",
        "owner": "Sean and Vlad"
    };
});

api.post('/command', function (request){
    if (request.walls == null){
        return move_forward();
    } else {
        return fire();
    }
});


function fire(){
    return {
        "command": 'fire'
    };
}

function move_forward(){
    return {
        "command": 'forward'
    };
}
