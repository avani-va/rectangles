var a;
var b;
function setup() {
  createCanvas(1200,800);
  a=createSprite(200, 200, 50, 50);
  b=createSprite(400, 200, 80, 80);

  a.shapeColor="green";
  b.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
  b.x=World.mouseX;
  b.y=World.mouseY;

 if(b.x-a.x < b.width/2 + a.width/2 && a.x-b.x < b.width/2 + a.width/2 && a.y-b.y < b.width/2 + a.width/2 && b.y-a.y < b.width/2 + a.width/2){
    a.shapeColor="red";
    b.shapeColor="red";
 }

else{
  a.shapeColor="green";
  b.shapeColor="green";  
}
  drawSprites();
}