let utrad = 250;
let edge = 100;
let inner = edge + utrad;
let font;
let fontsize = 20;


function setup() {
  createCanvas (700, 700);
  //background (5, 5, 40);
  colorMode (RGB);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  textSize(fontsize);
}



function draw() {
  background (5, 5, 40);
  
  
  unitCircle();
  angleDetection();
  textBoxes();
  pointer();
}

function unitCircle() {
  noFill();


  rect(350, 350, 500, 500);

//Triangle guiding lines from right to left then top down
  stroke(100, 100, 140);
  
    line(567, 475, 567, 225);
    line(527, 173, 527, 527);
    line(475, 133, 475, 567);
    
    line(225, 133, 225, 567);
    line(173, 173, 173, 527);
    line(133, 225, 133, 475);
    
 stroke(100, 140, 140);
 
   line(225, 133, 475, 133);
   line(173, 173, 527, 173);
   line(133, 225, 567, 225);
   
   line(133, 475, 567, 475);
   line(173, 527, 527, 527);
   line(255, 567, 475, 567);
    
  noStroke();

  //The big circle
  stroke(255, 255, 255);
  ellipse(350, 350, utrad);

  //The X and Y lines
  line(0, 350, 790, 350);
  line(350, 700, 350, 0);

  //45 degree lines
  line(527, 173, 173, 527);
  line(173, 173, 527, 527);

  //30 degree lines
  line(567, 475, 133, 225);
  line(567, 225, 133, 475);
  
  //60 degree lines
  line(475, 133, 225, 567);
  line(475, 567, 225, 133);
  
  //Origin point
  fill(255, 255, 255);
  ellipse(350, 350, 2.5);
  
  
  
  //MOUSE COORDINATES
  //text('mouseX'+mouseX, 50, 50);
  //text('mouseY'+mouseY, 50, 100);
  
}

function angleDetection() {
    
  //noFill();
  //rect(475,133, 10, 10);
  //fill(255);
 
}

function textBoxes(){
  
  fill(255);
  text('The Unit Circle', 10, 20,);
  textSize(15);
  text('Each point when aligned with your mouse creates', 10, 65);
  text('an Isosceles Triangle, or a 30-60-90 Triangle.', 10, 80);

  textSize(fontsize);
  text('30°', 567, 225);
  text('45°', 527, 173);
  text('60°', 475, 133);
  
  text('90°', 352, 95);
  
  text('120°', 225, 133);
  text('135°', 173, 173);
  text('150°', 133, 225);

  text('180°', 102, 347);
  
  text('210°', 133, 475);
  text('225°', 173, 527);
  text('240°', 225, 567);
  
  text('270°', 352, 618);
  
  text('300°', 475, 567);
  text('315°', 527, 527);
  text('330°', 567, 475);
  
  text('360°/0°', 602, 345);
}

function pointer() {


  fill(255, 255, 255);
  ellipse(mouseX, mouseY, 2.5);
  line(350, 350, mouseX, mouseY);
  line(mouseX, mouseY, 350, mouseY);
  line(mouseX, mouseY, mouseX, 350);
}
