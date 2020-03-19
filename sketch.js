
var planet,sun;

function setup() {
  createCanvas(800,400);
  sun = createSprite(400, 200, 50, 50);
  sun.shapeColor = "yellow";
  sun.setCollider("circle");
  sun.debug = true;

  planet = createSprite(500, 200, 30, 30);
  planet.shapeColor = "orange";
  planet.setCollider("circle");
  planet.debug = true;

}

function draw() {
  background(255,255,255); 

  sunBurn();

  drawSprites();
}

function sunBurn(){
  if(frameCount % 60 === 0){
    sun.height = sun.height + 10;
    sun.width = sun.width + 10;
   }
  if (planet.width/2 + sun.width/2 > planet.x - sun.x){
   planet.destroy();
  }


  
}

  
