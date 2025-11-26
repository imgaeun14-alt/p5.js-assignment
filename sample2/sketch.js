function setup() {
  createCanvas(600, 400); // 캔버스 크기: 가로 600, 세로 400
  background(200)
  noStroke(); // 외곽선 없애기
fill(255,223,0)
arc(300,300,400,600, radians(180), radians(0), OPEN)
  
  fill(255, 218, 185); // 살구색 (R=255, G=218, B=185)

  // 위로 긴 타원 그리기 (세로 길이가 가로 길이보다 길어야 함)
  // width/2 = 300, height/2 = 200 (중심 좌표)
  // 가로 지름: 150, 세로 지름: 300
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
  circle(360,180,30,30)
  circle(240,180,30,30);
noFill()
stroke(255,223,0)
strokeWeight(5)
arc(360,180,90,90,radians(225),radians(315))
arc(240,180,90,90,radians(225),radians(315))
stroke(0)
strokeWeight(2)
arc(360,180,60,40,radians(225),radians(315))
arc(240,180,60,40,radians(225),radians(315))
line(360,180,370,155)
line(240,180,230,155)
  fill(255,0,0)
  stroke(2)
  line(310,220,305,190)
  line(310,220,300,230)
  triangle(300,260,280,250,260,260)
  triangle(300,260,320,250,340,260)
  arc(300,260,80,30,radians(0),radians(180))
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

function draw() {
  // 정적인 이미지이므로 draw() 함수는 비워둡니다.
}
 
  