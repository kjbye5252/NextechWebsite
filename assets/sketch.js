var particles = [];
var song;

function preload(){
    song = loadSound("assets/Megalovania.mp3");
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('background');
    for(var i = 0; i < round((width*height)/4800); i++){
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
}

function renderLines(){
    stroke(95,127,165);
    strokeWeight(1);
    for(var i = 0; i < particles.length; i++){
        for(var j = i; j < particles.length; j++){
            if(dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y) < 100){
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
        strokeWeight(1);

        // lines connecting to mouse//
        if(dist(particles[i].x, particles[i].y , mouseX, mouseY) < 150){
            line(particles[i].x,particles[i].y,mouseX,mouseY);
        }
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
    particles = [];
    for(var i = 0; i < round((width*height)/4800); i++){
        particles[i] = {};
        particles[i].x = random() * windowWidth;
        particles[i].y = random() * windowHeight;
        particles[i].height = random()*0.5+0.3;
        particles[i].dx = random()-0.5 * particles[i].height;
        particles[i].dy = random()-0.5 * particles[i].height;
    }
}

function mousePressed(){
    song.play();
}
