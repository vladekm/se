var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;


function wall_in_range(walls, me, weapon_range){
    for (q=0; q <= weapon_range; q++){
        if (me.direction == 'top'){
            if (is_wall(walls, me.x, me.y-q)){
                return true;
            }
        }
        if (me.direction == 'bottom'){
            if (is_wall(walls, me.x, me.y+q)){
                return true;
            }
        }
        if (me.direction == 'left'){
            if (is_wall(walls, me.x-q, me.y)){
                return true;
            }
        }
        if (me.direction == 'right'){
            if (is_wall(walls, me.x+q, me.y)){
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
    var me = request.body.you;
    var weapon_range = request.body.weaponRange;
    if (wall_in_range(walls, me, weapon_range)){
        return fire();
    } else {
        return move_forward();
    }
});

