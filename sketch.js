
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, rock;
var FoodGroup, obstacleGroup;
var score;
var ground;
var score=0

gameState = "PLAY";


function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(width,height);
monkey = createSprite(80,315,20,20);
monkey.addAnimation("run",monkey_running);
monkey.scale= 0.1;
  

  
ground = createSprite(width,height,width*2,10);
ground.velocityX = -2;
ground.x = ground.width/4;
  
bananaGroup = new Group();
rockGroup = new Group();
}


function draw() {
background(255);
   if(gameState === "PLAY"){
stroke(20);
textSize(20);
fill("black");
text("Score:" +score,300,50); 
   
if(keyDown("space")&& monkey.collide(ground)) {
    monkey.velocityY = -18;}
  
monkey.velocityY = monkey.velocityY + 0.8;
   
if(monkey.isTouching(bananaGroup)){
      score = score + 2;
      bananaGroup.destroyEach();}
  
if (ground.x < 0){ground.x = width/3;}
   bananas(); obstacles();
   
if(monkey.isTouching(rockGroup)){
   gameState = "END" }
 }
  
  if(gameState==="END"){
    bananaGroup.destroyEach();
    rockGroup.destroyEach();
    monkey.visible=false;
    ground.velocityX=0;
    fill("red");
    textSize(20);
    text("game over",150,200);
  }
monkey.collide(ground);
bananas();
obstacles();
drawSprites();
}

function bananas(){
 if (frameCount % 80 === 0) {
    banana = createSprite(600,height/4,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(150,200))
    banana.scale = 0.04;
    banana.velocityX = -3;
    banana.lifetime = 450
    bananaGroup.add(banana);
 }
  
    }

function obstacles(){
   if (frameCount % 300 === 0) {
    rock = createSprite(600,320,40,10);
    rock.addImage(obstacleImage)
    rock.velocityX = -3;
    rock.scale=0.15;
    rock.lifetime = 450
    rockGroup.add(rock);
 }
}