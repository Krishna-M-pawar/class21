
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  game1=createSprite(200,200,100,50);

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(game1,movingRect)){
    movingRect.shapeColor = "blue";
    game1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    game1shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




