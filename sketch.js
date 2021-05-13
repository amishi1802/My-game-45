var coinImg,SofiaImg,stoneImg,treeImg,backgroundImg;
var Sofia;
var bg;
var stoneGrp;

function preload(){
  coinImg=loadImage("Images/coinImg.png");
  SofiaImg=loadImage("Images/SofiaImg.png");
  stoneImg=loadImage("Images/stoneImg.png");
  treeImg=loadImage("Images/treeImg.png");
  backgroundImg=loadImage("Images/backgroundImg.jpg");
}

function setup(){
  createCanvas(800,600);

  bg=createSprite(width,100,width,height);
  bg.addImage(backgroundImg);
  bg.x=bg.width+1000;
  bg.velocityX=-2;
  bg.scale=10;

  Sofia=createSprite(150,550);
  Sofia.addImage(SofiaImg);
  Sofia.scale=0.5;

  stoneGrp=new Group();
}

function draw(){
  background(0);

  if(bg.x <20){
     bg.x=bg.width+1000; 
    }
    stones();
drawSprites();


}

function stones(){
  if(frameCount % 120 === 0){
    var stone=createSprite(random(50,750),750);
    stone.addImage(stoneImg);
  
    stone.velocitX=-4;
    stone.scale=0.2;
    stone.lifetime=800;
    stoneGrp.add(stone);
}
}