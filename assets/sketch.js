var particles = [];
var mySound;

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');
    for(var i = 0; i < 100; i++){
        particles[i] = {};
        particles[i].x = random() * windowWidth;
        particles[i].y = random() * windowHeight;
        particles[i].height = random()*0.5+0.3;
        particles[i].dx = random()-0.5 * particles[i].height;
        particles[i].dy = random()-0.5 * particles[i].height;
    }
}

function draw(){
    background(0,45,102);
    updateParticles();
    renderLines();
    renderParticles();
    arrow();
}

function arrow(){
    strokeWeight(3);
    line(windowWidth/2, windowHeight-30, windowWidth/2-20, windowHeight-50);
    line(windowWidth/2, windowHeight-30, windowWidth/2+20, windowHeight-50);
}

function renderLines(){
    stroke(95,127,165);
    strokeWeight(1);
    for(var i = 0; i < particles.length; i++){
        for(var j = i; j < particles.length; j++){
            if(dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y) < 80){
                line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            }
        }
    }
}

function updateParticles(){
    for(var i = 0; i < particles.length; i++){
        particles[i].x += particles[i].dx;
        particles[i].y += particles[i].dy;
        if(particles[i].x <= 0){
            particles[i].x = windowWidth;
        } else if(particles[i].x >= windowWidth){
            particles[i].x = 0;
        }
        if(particles[i].y <= 0){
            particles[i].y = windowHeight;
        } else if(particles[i].y >= windowHeight){
            particles[i].y = 0;
        }
        particles[i].x -= (pmouseX - mouseX) * pow(particles[i].height,2) * 0.25;
        particles[i].y -= (pmouseY - mouseY) * pow(particles[i].height,2) * 0.25;
    }
}

function renderParticles(){
    stroke(95,127,165);
    fill(95,127,165);
    for(var i = 0; i < particles.length; i++){
        ellipse(particles[i].x, particles[i].y, 7,7);
    }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    for(var i = 0; i < particles.length; i++){
        particles[i].x = random()*windowWidth;
        particles[i].y = random()*windowHeight;
    }
}
