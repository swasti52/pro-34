
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0;
var value=0;
var gameState="play"

function preload(){
backgroundimg=loadImage("pc.png")
birdpic=loadImage("flappy dunk.png")
pillar1=loadImage("pillar.png")
pillartwo=loadImage("pillar2.png")
pillarthree=loadImage("pillar3.png")
p2=loadImage("p2.png")
}
 
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  pillargroup=new Group()

 bird= createSprite(100,300,20,90)
 bird.addImage(birdpic)
 bird.scale=0.1
 
  
 
}


function draw() 
{
  background("black");
  Engine.update(engine);
     if(gameState==="play"){


  bird.velocityY=bird.velocityY+0.5
  if(value>-1000){
    value=value-1
  }
else{
  value=0 
}

 
if (frameCount % 80 === 0){
  pillar=createSprite(1900,Math.round(random(200,300))-150,20,400)
  pillar2=createSprite(1900,Math.round(random(590,690))-150,20,200)
  pillar2.addImage(p2)
  pillar.addImage(pillar1)
  pillar.scale=0.7
  pillar2.scale=0.7

 pillar.velocityX = -6;
pillargroup.add(pillar)

pillar2.velocityX = -6;
pillargroup.add(pillar2)
pillar.debug=true
 
}
if(bird.isTouching(pillargroup)||bird.y<0||bird.y>windowHeight){
  gameOver()
  gameState="end"
  console.log("hi")
   }
  score=score +Math.round(1/2)
image(backgroundimg,value,0,4* windowWidth,windowHeight)
  textSize(30)
 fill("red")
  text("Score: "+score,20,20)
drawSprites()
}
else{
  image(backgroundimg,value,0,4* windowWidth,windowHeight)
  textSize(30)
 fill("red")
  text("Score: "+score,20,20)
  drawSprites()
  pillargroup.destroyEach ()
  bird.visible=false
}
}
function keyPressed(){
  if(keyCode===32){
    bird.velocityY=-8
  }
}

function gameOver() {
  swal(
    {
      title: `game over!!`,
      text: "Thanks for playing!!",
      
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}
