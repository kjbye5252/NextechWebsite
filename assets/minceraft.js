var blocks;
var img;
var cam;
var sens = 4;

function preload(){
    img = loadImage('assets/images/Keit.jpg');
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cam.move(4*150, -2*150, -4*150);
    blocks = [];
    for(var x = 0; x < 16; x++){
        blocks[x] = [];
        for(var y = 0; y < 5; y++){
            blocks[x][y] = [];
            for(var z = 0; z < 16; z++){
                blocks[x][y].push(new block(x*151,y*151,-z*151,img));
            }
        }
    }
}

function draw(){
    updateCamera();
    background(51);
    texture(img);
    for(var x = 0; x < 16; x++){
        for(var y = 0; y < 5; y++){
            for(var z = 0; z < 16; z++){
                blocks[x][y][z].draw();
            }
        }
    }
}

function block(x,y,z,texture){
    this.x = x;
    this.y = y;
    this.z = z;
    this.texture = texture;
    this.draw = function(){
        push();
        translate(this.x, this.y, this.z);
        box(150);
        pop();
    }
}

function updateCamera(){
    if(keyIsDown(87))//w
        cam.move(0,0,-5);
    if(keyIsDown(83))//s
        cam.move(0,0,5);
    if(keyIsDown(65))//a
        cam.move(-5,0,0);
    if(keyIsDown(68))//d
        cam.move(5,0,0);
    if(keyIsDown(32))//space
        cam.move(0,-5,0);
    if(keyIsDown(16))//shift
        cam.move(0,5,0);
    if(mouseIsPressed){
        cam.pan(-radians(mouseX-pmouseX)/sens);
        cam.tilt(radians(mouseY-pmouseY)/sens);
    }
}
