var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(200,200,50,50);
  movingRect = createSprite(200,100,50,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 
}

function draw() {
  background("white");  


  console.log(fixedRect-movingRect);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <  fixedRect.width/2 + movingRect.width/2 && fixedRect.x -movingRect.x < fixedRect.width/2 + movingRect.width/2  &&  movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2  && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2 ){
    fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }





  drawSprites();
}