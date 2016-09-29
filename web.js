var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;


function wall_in_range(walls, me, visibility){
    if (me.direction == 'top'){
        for (q=1; q <= visibility; q++){
            if (is_wall(walls, me.x, me.y-q)){
                return true;
            }
        }
    }
    return false
}

function is_wall(walls, x, y){
    for (index = 0; index<walls.length; index++){
        if ((walls[index].x == x) && (walls[index].y == y)){
            return true
        }
    }
    return false;
}

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
api.get('/info', function (request){
    return {
        "name": "Tom the Tank",
        "owner": "Sean and Vlad"
    };
});

api.post('/command', function (request){
    var walls = request.body.walls;
    var me = request.body.you
    var visibility = request.body.visibility
    if (wall_in_range(walls, me, visibility)){
        return fire();
    } else {
        return move_forward();
    }
});

