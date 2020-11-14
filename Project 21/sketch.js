var car , wall ; 
var speed , weight , thickness;

function setup() {
  createCanvas(1600,400);
   car = createSprite(50,200, 70, 20);
   car.shapeColor = ("white"); 

   wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;
  speed = random(223,321);
  weight = random(30,52);
  thickness = random (22,100)
}

function draw() {
  background("black");  
  car.velocityX = speed;

  carRightEdge = car.x + car.width;
  wallLeftEdge = wall.x;
  if(carRightEdge>=wallLeftEdge){

    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509
    
    if(deformation>10){
      wall.shapeColor = ("red");
    }

    if(deformation<10){
      wall.shapeColor = ("green");
    }
  }
  drawSprites();
}