var mic;

function setup() {
  //background(0)
  mic=new p5.AudioIn();
  mic.start();
  createCanvas(windowWidth,windowHeight);
  mic.start();
}

function draw() {
  background(0);
  var vol=mic.getLevel();
  noFill();
  stroke(0,199,140);
  ellipse(windowWidth/2,windowHeight/2,vol*500,vol*500);
  
  push();
  noFill();
  stroke(256,0,140);
  ellipse(windowWidth/2,windowHeight/2,vol*200,vol*200)
  pop();
}