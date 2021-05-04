



function preload(){
  backgroundimg=loadImage("snow3.jpg");
  snowimg=loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,500);
  //createSprite(400, 200, 50, 50);
 
  
  

}

function draw() {
  background(backgroundimg); 
  snowfall();
  drawSprites();
}
function snowfall(){
  if (World.frameCount % 30 == 0) {
  var snow = createSprite(Math.round(random(50,width-50),40, 10, 10));
  snow.addImage(snowimg);
  snow.scale=0.1;
  snow.velocityY = 3;
 snow.lifetime = 150;
  
  }
}