var rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for(var i = 0 ; i < 5; i++){
      rects[i] = new Rectangle(width-i*0.1384*width, height-i*0.1384*height, i);
  }
}

function draw() {
  background(51);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  strokeWeight(4);
  for(var i = 0 ; i < 5; i++){
      rects[i].x = (mouseX - width/2);
      rects[i].y = (mouseY - height/2);
      rects[i].draw();
  }
  // line(-width/2, -height/2, (rects[4].x-width/2) * 4 * 0.12, (rects[4].y-height/2) * 4 * 0.12);
}

function Rectangle(width, height, depth){
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.depth
    this.draw = function(){
        rect(this.x * depth * 0.12, this.y * depth * 0.12, this.width, this.height);
    }
}
