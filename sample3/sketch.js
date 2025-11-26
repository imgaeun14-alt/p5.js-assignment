let yPos, yDir;
let xPos;
let xDir;
let diam1, diam2;
let bgColor = 200;

function setup() {
  createCanvas(600, 400);
  background(bgColor);
  yPos=260
  yDir=0.8;
  xPos=360;
  xDir=0.2;
  diam1=30;
  diam2=20;
}

function draw() {
  xPos=xPos+xDir;
if (xPos-diam2/2 < 360) {
   xDir = -xDir;
}
if (xPos+diam2/2 > 360) {
   xDir = -xDir;
}
  yPos=yPos+yDir;
if (yPos-diam1/2 < 245) {
   yDir = yDir * -1;
}
if (yPos+diam1/2 > 300) {
   yDir = yDir * -1;
}
  
noStroke();
fill(255,223,0)
arc(300,300,400,600, radians(180), radians(0), OPEN)
  
  fill(255, 218, 185);  
  ellipse(width / 2, height / 2, 230, 300); 
fill(255,223,0)
arc(300, 150, 200, 200, radians(170), radians(270), OPEN)
arc(300,150,200,200, radians(270), radians(10), OPEN)
  fill(255)
  stroke(0)
  strokeWeight(2)
  ellipse(360,180,50,30)
  ellipse(240,180,50,30)
  fill(0)
  circle(xPos,180,diam2);
  circle(mouseX, mouseY,20);
noFill()
stroke(255,223,0)
strokeWeight(5)
arc(360,180,90,90,radians(225),radians(315))
arc(240,180,90,90,radians(225),radians(315))
stroke(0)
strokeWeight(2)
arc(360,180,60,40,radians(225),radians(315))
arc(240,180,60,40,radians(225),radians(315))
line(365,165,370,155)
line(235,165,230,155)
  fill(255,0,0)
  stroke(2)
  line(310,220,305,190)
  line(310,220,300,230)
  triangle(300,260,280,250,260,260)
  triangle(300,260,320,250,340,260)    
  arc(300,yPos,80,diam1, radians(0), radians(180));
  fill(255,218,185)
  noStroke()
  rect(260,320,80,130)
  fill(0,255,0)
  square(240,360,120)
  fill(0,0,255)
  quad(185,200,175,230,185,260,195,230)
  quad(415,200,405,230,415,260,425,230)
  quad(185,260,175,290,185,320,195,290)
  quad(415,260,405,290,415,320,425,290)
}

function keyPressed() {
   if(key === 'R') {
     bgColor = color(255,0,0);
  } else if (key === 'G') {
    bgColor = color(0,255,0);
  } else if (key === 'B') {
    bgColor = color(0,0,255);
  } else if (key === ' ') {
    bgColor = 200;
  }
  background(bgColor);
}