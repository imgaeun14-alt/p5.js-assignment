let diam = 20;
let r;
let g;
let b;
change=30

const amplitude = 50;
const speed = 0.05;

function setup() {
  createCanvas(400, 400);
  r=0
  g=0
  b=255
}

function draw() {
  let offsetX = sin(frameCount*speed)*amplitude
  
  background(220);
  stroke(0)
  strokeWeight(6)
  fill(255)
  ellipse(300,100,80,100)
  line(265,80,335,80)
  line(335,80,360,65)
  arc(100,100,120,100,0,PI+QUARTER_PI,CHORD)
  line(45,80,20,65)
  if (frameCount%change==0)
    {
    r=random(255)
    g=random(255)
    b=random(255)
    }
  strokeWeight(2)
  fill(r,g,b)
  rect(90,95,15)
  fill(255,255,0)
  circle(300,100,diam);
  diam += 20;
  diam %= 300;
strokeWeight(5)
fill(0,255,0)
triangle(200,200,90,220,300,220)
triangle(90,220,200,355,300,220)
fill(255)
triangle(90,220,200,330,300,220)
  strokeWeight(3)
  noFill()
  arc(90,220,55,55,PI,PI+QUARTER_PI)
  
noStroke()
fill(255,0,0)
quad(200,250,155,260,200,270,245,260)
triangle(155+offsetX,260,65,265,45,310)
triangle(245+offsetX,260,335,255,355,210)
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);}
  }