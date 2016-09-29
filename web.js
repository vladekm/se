var ApiBuilder = require("claudia-api-builder"),
    api = new ApiBuilder();

module.exports = api;


function wall_in_range(walls, me, weapon_range){
    for (q=0; q <= weapon_range; q+=1){
        if (me.direction == "top"){
            if (is_wall(walls, me.x, me.y-q)){
                return true;
            }
        }
        if (me.direction == "bottom"){
            if (is_wall(walls, me.x, me.y+q)){
                return true;
            }
        }
        if (me.direction == "left"){
            if (is_wall(walls, me.x-q, me.y)){
                return true;
            }
        }
        if (me.direction == "right"){
            if (is_wall(walls, me.x+q, me.y)){
                return true;
            }
        }
    }
    return false;
}

function is_wall(walls, x, y){
    for (index = 0; index<walls.length; index+=1){
        if ((walls[index].x == x) && (walls[index].y == y)){
            return true
        }
    }
    return false;
}

function is_boundary(field_width, field_height, me){
    if (me.direction == "top"){
        if ((me.y-1) <= 0){
            return true;
        }
    }
    if (me.direction == "bottom"){
        if ((me.y+1) >= field_height){
            return true;
        }
    }
    if (me.direction == "right"){
        if ((me.x+1) >= field_width){
            return true;
        }
    }
    if (me.direction == "left"){
        if ((me.x-1) <= 0){
            return true;
        }
    }
    return false
}

function enemy_in_range(enemies, me, weapon_range){
    for (q=0; q <= weapon_range; q++){
        if (me.direction == 'top'){
            if (is_enemy(enemies, me.x, me.y-q)){
                return true;
            }
        }
        if (me.direction == 'bottom'){
            if (is_enemy(enemies, me.x, me.y+q)){
                return true;
            }
        }
        if (me.direction == 'left'){
            if (is_enemy(enemies, me.x-q, me.y)){
                return true;
            }
        }
        if (me.direction == 'right'){
            if (is_enemy(enemies, me.x+q, me.y)){
                return true;
            }
        }
    }
    return false
}

function is_enemy(enemies, x, y){
    for (index = 0; index<enemies.length; index++){
        if ((enemies[index].x == x) && (enemies[index].y == y)){
            return true
        }
    }
    return false;
}

function fire(){
    return {
        "command": "fire"
    };
}

function move_forward(){
    return {
        "command": "forward"
    };
}

function turn_left(){
    return {
        "command": "turn-left"
    };
}

function turn_right(){
    return {
        "command": "turn-right"
    };
}

api.get("/info", function (request){
    return {
        "name": "Tom the Tank",
        "owner": "Sean and Vlad"
    };
});

api.post("/command", fun)tion (request){
    var walls = request.body.walls;
    var enemies = request.body.enemies
    var me = request.body.you;
    var weapon_range = request.body.weaponRange;
    var field_width = request.body.mapWidth;
    var field_height = request.body.mapHeight;

    if is_boundary(field_width, field_height, me){
        return turn_left();
    }
    if (wall_in_range(walls, me, weapon_range)){
        return fire();
    };
    if (enemy_in_range(enemies, me, visibility)){
        return fire();
    }
    return move_forward();

});

