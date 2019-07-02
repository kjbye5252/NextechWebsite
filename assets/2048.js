var tileMap = [];
var up = false;
var right = false;
var down = false;
var left = false;
var rectFill, textFill;
var temp = 0;
var move = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    for(var i = 0; i < 4; i++){
        tileMap[i] = [];
        for(var j = 0; j < 4; j++){
            tileMap[i][j] = 0;
        }
    }
    placeRandom();
}

function draw(){
    background(251,248,239);
    translate(width/2-250,height/2-250);
    fill(187,173,160);
    noStroke();
    rect(0,0,500,500);
    update();
    render();
}

function placeRandom(){
    ranX = floor(random()*tileMap[0].length);
    ranY = floor(random()*tileMap.length);
    if(tileMap[ranX][ranY] == 0){
        tileMap[ranX][ranY] = 2;
    } else{
        placeRandom();
    }
}

function update(){
    if(up){
        for(var x = 0; x < tileMap.length; x++){
            for(var y = 1; y < tileMap[0].length; y++){
                for(var i = y; i > 0; i--){
                    if(tileMap[i-1][x] == 0){
                        temp++;
                    }
                    else if(tileMap[i-1][x] == tileMap[y][x]){
                        temp++;
                        tileMap[y][x] *= 2;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if(temp > 0){
                    tileMap[y-temp][x] = tileMap[y][x];
                    tileMap[y][x] = 0;
                    move = true;
                }
                temp = 0;
            }
        }
        if(move = false){
            placeRandom();
        }
        move = false;
        up = false;
    } else if(right){
        for(var y = 0; y < tileMap[0].length; y++){
            for(var x = tileMap.length - 2; x >= 0; x--){
                for(var i = x; i < tileMap[0].length - 1; i++){
                    if(tileMap[y][i+1] == 0){
                        temp++;
                    }
                    else if(tileMap[y][i+1] == tileMap[y][x]){
                        temp++;
                        tileMap[y][x] *= 2;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if(temp > 0){
                    tileMap[y][x+temp] = tileMap[y][x];
                    tileMap[y][x] = 0;
                    move = true;
                }
                temp = 0;
            }
        }
        if(move = true){
            placeRandom();
            move = false;
        }
        right = false;
    } else if(down){
        for(var x = 0; x < tileMap.length; x++){
            for(var y = tileMap[0].length - 2; y >= 0; y--){
                for(var i = y; i < tileMap[0].length - 1; i++){
                    if(tileMap[i+1][x] == 0){
                        temp++;
                    }
                    else if(tileMap[i+1][x] == tileMap[y][x]){
                        temp++;
                        tileMap[y][x] *= 2;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if(temp > 0){
                    tileMap[y+temp][x] = tileMap[y][x];
                    tileMap[y][x] = 0;
                    move = true;
                }
                temp = 0;
            }
        }
        if(move = true){
            placeRandom();
            move = false;
        }
        down = false;
    } else if(left){
        for(var y = 0; y < tileMap.length; y++){
            for(var x = 1; x < tileMap[0].length; x++){
                for(var i = x; i > 0; i--){
                    if(tileMap[y][i-1] == 0){
                        temp++;
                    }
                    else if(tileMap[y][i-1] == tileMap[y][x]){
                        temp++;
                        tileMap[y][x] *= 2;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if(temp > 0){
                    tileMap[y][x-temp] = tileMap[y][x];
                    tileMap[y][x] = 0;
                    move = true;
                }
                temp = 0;
            }
        }
        if(move = true){
            placeRandom();
            move = false;
        }
        left = false;
    }
}

function render(){
    for(var y = 0; y < tileMap.length; y++){
        for(var x = 0; x < tileMap[0].length; x++){
            textStyle(BOLD);
            textSize(60);
            if(tileMap[y][x] == 0){
                textFill = 'rgb(205, 193, 179)';
                rectFill = 'rgb(205, 193, 179)';
            } else if(tileMap[y][x] == 2){
                textFill = 'rgb(120, 111, 102)';
                rectFill = 'rgb(238, 228, 218)';
            } else if(tileMap[y][x] == 4){
                textFill = 'rgb(120, 111, 102)';
                rectFill = 'rgb(236, 224, 200)';
            } else if(tileMap[y][x] == 8){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(242, 177, 121)';
            } else if(tileMap[y][x] == 16){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(245, 149, 99)';
            } else if(tileMap[y][x] == 32){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(245, 124, 95)';
            } else if(tileMap[y][x] == 64){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(246, 93, 59)';
            } else if(tileMap[y][x] == 128){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(237, 206, 113)';
            } else if(tileMap[y][x] == 256){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(245, 149, 99)';    //wrong
            } else if(tileMap[y][x] == 512){
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(236, 200, 80)';
            } else if(tileMap[y][x] == 1024){
                textSize(40);
                textFill = 'rgb(249, 246, 241)';
                rectFill = 'rgb(237, 197, 63)';
            }
            fill(rectFill);
            rect(110*x+12*x+12, 110*y+12*y+12, 110, 110);
            fill(textFill);
            text(tileMap[y][x], 110*x+12*x+12+55, 110*y+12*y+12+75);
        }
    }
}

function keyPressed(){
    if(keyCode == 87){
        up = true;
    } else if(keyCode == 68){
        right = true;
    } else if(keyCode == 83){
        down = true;
    } else if(keyCode == 65){
        left = true;
    }
}
