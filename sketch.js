var player;
var score = 0;
var lives = 3;
function preload(){
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  player = new Player(200,200,20,50);

 

}

function draw() {
  background("black");

  textSize(20);
  text("SCORE: " + score,width-150,50);
  text("LIVES: " + lives,width-250,50);
  player.display();
  
  

  drawSprites()
}