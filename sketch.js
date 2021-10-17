const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Start=1
var Play=0
var Level2=2
var Lose=3
var Win=4
var GameState=Play 
var life=3;
var score2=0;
var dorasc=0
var mouse,gian,box,robo;



function preload(){
  gianstanding = loadAnimation("images/nekojara.png");
 // gianangry = loadAnimation("images/gian.png");

  bg3Img = loadImage("images/bg5.jpg");
  bg5Img = loadImage("images/bg6.jpg");
  bg4Img = loadImage("images/bg4.jpg");
  bg6Img = loadImage("level2/bg6.jpg");
  bg7Img= loadImage("win/bg.jpeg");
  bg8Img= loadImage("lose/bg2.jpg");
  playImg = loadImage("images/playb2.png");
  insImg= loadImage("images/info2.png");
  ins2Img= loadImage("images/ins2.png");
  aboutImg= loadImage("images/about3.png");
  about2Img= loadImage("images/about2.png");
  crossImg= loadImage("images/cross.png");
  hbutImg = loadImage("win/res.png");
  resImg= loadImage("win/Restart.png");
  wallImg= loadImage("level2/hur5.jpg");
  wall2Img= loadImage("level2/hur3.jpg");
  wall3Img= loadImage("level2/swall.png");
  nobitaImg= loadImage("level2/nobita.png");
  shizukaImg= loadImage("level2/shizuka.png");
  lev2gianImg= loadImage("level2/gianlev2.png");
  doramiImg= loadImage("level2/suneo.png");
  nobita2Img= loadImage("level2/nobita2.png");
  shizuka2Img= loadImage("level2/shizuka2.png");
  lev2gian2Img= loadImage("level2/gianlev2(2).png");
  dorami2Img= loadImage("level2/suneo2.png");
  mon1Img= loadImage("level2/mon1.png");
  mon2Img= loadImage("level2/mon2.png");
  mon3Img= loadImage("level2/mon3.png");

  doraemonImg = loadAnimation("images/doraemon1/doraemon1.png","images/doraemon1/doraemon2.png","images/doraemon1/doraemon3.png","images/doraemon1/doraemon4.png","images/doraemon1/doraemon5.png","images/doraemon1/doraemon6.png",);
  doraemonlev2Img = loadAnimation("images/doraemon2/doraemon(2)1.png","images/doraemon2/doraemon(2)2.png","images/doraemon2/doraemon(2)3.png","images/doraemon2/doraemon(2)4.png","images/doraemon2/doraemon(2)5.png","images/doraemon2/doraemon(2)6.png",);
  doraemon2Img= loadAnimation("images/doraemon7.png")
  doraflyImg = loadAnimation("images/dorafly/dorafly.png")
  dorajumpImg= loadAnimation("images/doraemon1/doraemon4.png")
  mouseImg = loadAnimation("images/mouse.png");
  boxImg = loadAnimation("images/box.png");
  roboImg = loadAnimation("images/enemy.png");
  gad3Img=loadAnimation("images/gad3.png");
  gad1Img=loadAnimation("images/gad1.png");
  bulImg=loadAnimation("images/bullet.png");
  gad4Img=loadAnimation("images/gad4.png");
  gad2Img=loadAnimation("images/gad2.png");
  gad22Img=loadAnimation("images/gad2(2).png");
  blastImg=loadAnimation("images/blast.png");

  cakeImg=loadAnimation("level2/doracake4.png")

  jsound= loadSound("sound/jump.wav");
  gsound= loadSound("sound/gun.mp3");
  pdsound= loadSound("sound/point decrease.wav");
  pisound= loadSound("sound/point.wav");
  gamesound= loadSound("sound/game.mp3");

}
function setup() {
  createCanvas(windowWidth , windowHeight);



  bkground1=createSprite(width/2+450,height/2,20,20);
  bkground1.addImage(bg3Img);
  bkground1.scale=1.62;
  bkground1.visible=false

  bkground2=createSprite(width/2+3000,height/2+3,20,20);
  bkground2.addImage(bg5Img);
  bkground2.scale=1.62;
  bkground2.visible=false

  doraemon= createSprite(width/2-565,height/2+230,20,50);
  doraemon.addAnimation("running", doraemonImg);
  doraemon.addAnimation("standing", doraemon2Img);
  doraemon.addAnimation("flying", doraflyImg);
  doraemon.addAnimation("jumping", dorajumpImg);
  doraemon.scale=0.7
  doraemon.visible=false

  doraemon2= createSprite(width/15,height/2-241,20,50);
  doraemon2.addAnimation("running", doraemonImg);
  doraemon2.addAnimation("leftrunning", doraemonlev2Img);
  doraemon2.addAnimation("standing", doraemon2Img);
  doraemon2.addAnimation("flying", doraflyImg);
  doraemon2.addAnimation("jumping", dorajumpImg);
  doraemon2.visible=false

  gad3=createSprite(width/2+200,height/2+300,20,20);
  gad3.addAnimation("running",gad3Img);
  gad3.scale=0.5;
  gad3.visible=false
  
  gad1=createSprite(width/2+400,height/2+100,20,20);
  gad1.addAnimation("running",gad1Img);
  gad1.scale=0.2;
  gad1.visible=false

  gad4=createSprite(width/2,height/2+200,20,20);
  gad4.addAnimation("running",gad4Img);
  gad4.scale=0.45;
  gad4.visible=false

  pl=createSprite(width/2+500,height/2-250,20,20);
  pl.addImage(playImg);
  pl.scale=0.3;
  pl.setCollider("rectangle",0,0,330,130);
  pl.visible=false

  ins=createSprite(width/2+500,height/2-150,20,20);
  ins.addImage(insImg);
  ins.scale=0.5;
  ins.visible=false

  about=createSprite(width/2+500,height/2-50,20,20);
  about.addImage(aboutImg);
  about.scale=1.2;
  //about.visible=false

  ins2=createSprite(width/2,height/2-70,20,20);
  ins2.addImage(ins2Img);
  ins2.scale=1.5;
  ins2.visible=false

  about2=createSprite(width/2,height/2-70,20,20);
  about2.addImage(about2Img);
  about2.scale=1.5;
  about2.visible=false

  cross=createSprite(width/2-450,height/2-400,20,20);
  cross.addImage(crossImg);
  cross.scale=0.15;
  cross.visible=false

  res=createSprite(width/2+200,height/2+150,20,20);
  res.addImage(resImg);
  res.scale=0.3;
  res.setCollider("rectangle",0,0,330,130);
  res.visible=false

  home=createSprite(width/2+450,height/2+150,20,20);
  home.addImage(hbutImg);
  home.scale=0.45;
  home.visible=false

 gad3Group=new Group();
 boxGroup=new Group();
 gad1Group=new Group(); 
 gianGroup=new Group();
 roboGroup=new Group();
 mouseGroup=new Group();
 bulGroup=new Group();
 gad2Group=new Group();
 wallGroup=new Group();
 monGroup=new Group();
 nobitaGroup=new Group();
 shizukaGroup=new Group();
 gianlev2Group=new Group();
 doramiGroup=new Group();
 gad6Group=new Group();
 gad7Group=new Group();
 trGroup=new Group();
 doracakeGroup=new Group();

 gad2=createSprite(width/2+950,height/2+200,20,20);
 gad2.addAnimation("walking",gad22Img);
 gad2.addAnimation("running",gad2Img);
 gad2.scale=0.9;
 gad2.visible =false
// gad2.lifetime=200
 gad2Group.add(gad2);

 mon1=createSprite(width/5-100,height/2+120,80,200);
 mon1.addImage(mon1Img);
 mon1.scale=0.23;
// mon1.debug=true

 mon1.setCollider("rectangle",0,0,280,370);
// monGroup.add(mon1);

 mon2=createSprite(width/2+350,height/2-390,80,200);
 mon2.addImage(mon2Img);
 mon2.scale=0.23;
// mon2.velocityY=4;
 //mon2.debug=true

// monGroup.add(mon2)

 mon3=createSprite(width/2+500,height/2+220,80,200);
 mon3.addImage(mon3Img);
 mon3.scale=0.4;
 //mon3.velocityY=4
 //mon3.debug=true

 //monGroup.add(mon3);

 wall1=createSprite(width/12,height/2-240,50,200);
 wall1.addImage(wallImg);
 wall1.scale=1;
 wall1.visible=true
 //wallGroup.add(wall1);
 
 wall2=createSprite(width/4,height/2+30,50,200);
 wall2.addImage(wallImg);
 wall2.scale=1;
 wall2.visible=true
// wallGroup.add(wall2);

 wall3=createSprite(width/5,height/2+30,50,200);
 wall3.addImage(wallImg);
 wall3.scale=1;
 wall3.visible=true
// wallGroup.add(wall3);

 wall4=createSprite(width/2+730,height/2-160,50,200);
 wall4.addImage(wallImg);
 wall4.scale=1;
 wall4.visible=true
 //wallGroup.add(wall4);

 wall5=createSprite(width/2+560,height/2-160,50,200);
 wall5.addImage(wallImg);
 wall5.scale=1;
 wall5.visible=true
 //wallGroup.add(wall5);

 wall6=createSprite(width/2+700,height/2+40,50,200);
 wall6.addImage(wallImg);
 wall6.scale=1;
 wall6.visible=true
 //wallGroup.add(wall6);

 wall7=createSprite(width/2+450,height/2+40,50,200);
 wall7.addImage(wallImg);
 wall7.scale=1;
 wall7.visible=true
 //wallGroup.add(wall7);

 wall8=createSprite(width/3-50,height/6-50,50,200);
 wall8.addImage(wall2Img);
 wall8.scale=0.9;
 wall8.visible=true
// wallGroup.add(wall8);

 wall9=createSprite(width/2-300,height-290,50,200);
 wall9.addImage(wall2Img);
 wall9.scale=0.9;
 wall9.visible=true
 //wallGroup.add(wall9);

 wall10=createSprite(width/2-300,height-100,50,200);
 wall10.addImage(wall2Img);
 wall10.scale=0.9;
 wall10.visible=true
 //wallGroup.add(wall10);

 wall11=createSprite(width/2+450,height/2-330,50,200);
 wall11.addImage(wall2Img);
 wall11.scale=0.9;
 wall11.visible=true
// wallGroup.add(wall11);

 wall12=createSprite(width/2+450,height/2-270,50,200);
 wall12.addImage(wall2Img);
 wall12.scale=0.9;
 wall12.visible=true
 //wallGroup.add(wall12);

 wall13=createSprite(width/2,height/2-410,50,200);
 wall13.addImage(wall3Img);
 wall13.scale=0.2;
 //wall13.velocityY=4
 wall13.visible=true
// wall13.debug=true
 monGroup.add(wall13);

 wall14=createSprite(width/2,height/2-334,50,200);
 wall14.addImage(wall3Img);
 wall14.scale=0.2;
 //wall14.velocityY=4
 wall14.visible=true
// wall14.debug=true
 monGroup.add(wall14);

 wall15=createSprite(width/2,height/2-258,50,200);
 wall15.addImage(wall3Img);
 wall15.scale=0.2;
// wall15.velocityY=4
 wall15.visible=true
 //wall15.debug=true
 monGroup.add(wall15);

 wall16=createSprite(width/2,height/2-182,80,200);
 wall16.addImage(wall3Img);
 wall16.scale=0.2;
 //wall16.velocityY=4
 wall16.visible=true
// wall16.debug=true
 monGroup.add(wall16);

 nobita=createSprite(width-100,height/2+250,80,200);
 nobita.addImage(nobitaImg);
 nobita.scale=0.3
 nobita.visible=true
 nobitaGroup.add(nobita);

 shizuka=createSprite(width/2+150,height/2+250,80,200);
 shizuka.addImage(shizukaImg);
 shizuka.scale=0.26
 shizuka.visible=true
 shizukaGroup.add(shizuka);

 gianlev2=createSprite(width/5+60,height/2+250,80,200);
 gianlev2.addImage(lev2gianImg);
 gianlev2.scale=0.34;
 gianlev2.visible=true
 gianlev2Group.add(gianlev2);

 dorami=createSprite(width/2+200,height/5,30,200);
 dorami.addImage(doramiImg);
 dorami.scale=0.55;
 dorami.visible=true
 doramiGroup.add(dorami);

 nobita2=createSprite(width/2-360,height/5-125,80,200);
 nobita2.addImage(nobita2Img);
 nobita2.scale=0.4
 nobita2.visible=false
 //nobitaGroup.add(nobita);

 shizuka2=createSprite(width/2-420,height/2-360,80,200);
 shizuka2.addImage(shizuka2Img);
 shizuka2.scale=0.3;
 shizuka2.visible=false
 //shizukaGroup.add(shizuka);

 gianlev23=createSprite(width/5-70,height/2-360,80,200);
 gianlev23.addImage(lev2gian2Img);
 gianlev23.scale=0.4;
 gianlev23.visible=false
// gianlev2Group.add(gianlev2);

 dorami2=createSprite(width/5-10,height/5-130,80,200);
 dorami2.addImage(dorami2Img);
 dorami2.scale=0.6;
 dorami2.visible=false
 //doramiGroup.add(dorami);

 gad6=createSprite(width-60,height/2-20,20,20);
 gad6.addAnimation("running",gad2Img);
 gad6.scale=0.3
 gad6Group.add(gad6);
 gad6.visible=true

 gad7=createSprite(width-220,height/2-220,20,20);
 gad7.addAnimation("running",gad2Img);
 gad7.scale=0.3
 gad7Group.add(gad7);
 gad7.visible=true


 invible=createSprite(width/15-125,height/2,20,2000);
 invible.visible=false
 invible2=createSprite(width+5,height/2,20,2000);
 invible2.visible=false
 invible3=createSprite(width/2,height+5,2000,20);
 invible3.visible=false
 invible4=createSprite(width/2,height/20-50,2000,20);
 invible4.visible=false


 treasure=createSprite(width/2+780,height/2-200,20,20);
 treasure.addAnimation("running",cakeImg);
 treasure.scale=0.005 ;
 treasure.visible=true
 trGroup.add(treasure);

 wall13.velocityY=-4
 wall14.velocityY=-4
 wall15.velocityY=-4
 wall16.velocityY=-4
 wall13.velocityY=4
 wall14.velocityY=4
 wall15.velocityY=4
 wall16.velocityY=4
 mon1.velocityY=4
 mon2.velocityY=-4
 mon3.velocityY=4

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 // wall1 = new Wall(970,193,30,40);


}
function draw() {
  level2function()


  if(GameState===Start)
  {
      background(bg4Img)
      drawSprites()

      startvisible()
      if(mousePressedOver(pl))
 {
  GameState=Play
  frameCount=1
  gamesound.play()
 }

 if(mousePressedOver(ins))
 {
  ins2.visible=true;
  cross.visible=true;

 }

 if(mousePressedOver(about))
 {
  about2.visible=true;
  cross.visible=true;

 }

 if(mousePressedOver(cross))
 {
  ins2.visible=false;
  cross.visible=false;
  about2.visible=false

 }
  }

  if(GameState===Play)
  {
background("green")

Playvisible()
camera.velocityX=-5;
bkground1.velocityX=-5;
bkground2.velocityX=-5;

doraemon.visible=true;
ins2.visible=false;
cross.visible=false;
about2.visible=false
about.visible=false
//gamesound.loop = false; 
//gamesound.playbackRate = ;
//gamesound.play();
//gamesound.


if(bkground1.x<width-2865)
{
  bkground1.x=width/2+3000
}
if(bkground2.x<width-2865)
{
  bkground2.x=width/2+3000
}

doraemon.velocityY = doraemon.velocityY + 0.4;

if(doraemon.y>height/2+235)
{
  doraemon.velocityY=0
  doraemon.changeAnimation("running", doraemonImg);
  doraemon.scale = 0.7
}

if(frameCount % 1870 == 0) 
  {
    gian= createSprite(width/2+700, height/2+190,20,50);
    gian.addAnimation("standing", gianstanding);
   // gian.addAnimation("angry", gianangry);
    gian.scale = 0.8;
    gian.velocityX=-5;
    gian.lifetime=300;
    gianGroup.add(gian);
    console.log(doraemon.x+gian.x)

    gad3.visible=true
    gad3.velocityX=-5;

  }

    if(gad3.isTouching(doraemon))
{
  gad3.x=width/2-250;
  gad3.y=height/2-290
  gad3.velocityX=0;
  console.log("gian")
}
if(gianGroup.isTouching(doraemon))
{
 
  gianGroup.destroyEach()
  pdsound.play()
  life=life-1
  gad3.visible=false
  gad3.x=width/2+200;
  gad3.y=height/2+300
}

 if((mousePressedOver(gad3)&&(gad3.y===height/2-290)))
     {
      gianGroup.destroyEach()
      gad3.visible=false
      gad3.x=width/2+200;
      gad3.y=height/2+300

     }

if(frameCount % 500== 0) 
  {
    mouse= createSprite(width/2+700, height/2+285,20,50);
    mouse.addAnimation("running", mouseImg);
    mouse.scale = 0.3;
    mouse.velocityX=-5;
    mouse.lifetime=310;
    mouse.setCollider("rectangle",-70,23,250,150);
   mouseGroup.add(mouse);

   }
if(mouseGroup.isTouching(doraemon))
{
  gad3.visible=false
  gad3.x=width/2+200;
  gad3.y=height/2+300
  mouseGroup.destroyEach()
  pdsound.play()
  life=life-1
}

if(frameCount % 2750 == 0) 
{
  box= createSprite(width/2+1100, height/2+170,20,50);
  box.addAnimation("running", boxImg);
  box.scale = 0.9;
  box.velocityX=-5;
  box.lifetime=350;
  box.setCollider("rectangle",0,23,450,450);
  boxGroup.add(box);

  gad1.visible=true
  gad1.velocityX=-5;
  console.log("box")
 }
 if(boxGroup.isTouching(doraemon))
 {
  
   boxGroup.destroyEach()
   pdsound.play()
   life=life-1
   gad1.visible=false
   gad1.x=width/2+200;
   gad1.y=height/2+150
 }
 if(gad1.isTouching(doraemon))
 {
  gad1.x=width/2-250;
  gad1.y=height/2-290
  gad1.velocityX=0;

 }

 if((mousePressedOver(gad1)&&(gad1.y===height/2-290)))
 {
   doraemon.changeAnimation("flying", doraflyImg);
   doraemon.y=height/2-200
   doraemon.velocityY=0;
   doraemon.scale = 0.14;
 }
if(box.lifetime<=0)
{
 gad1.x= width/2+200
 gad1.y= height/2+150
 gad1.visible=false
}

if(frameCount % 4000 === 0) 
  {
    robo= createSprite(width/2+900, height/2+5,20,50);
    robo.addAnimation("running", roboImg);
    robo.addAnimation("blast", blastImg);
    robo.scale = 1.4;
    robo.velocityX=-5;
    robo.lifetime=300;
    robo.setCollider("rectangle",50,23,200,450);
    roboGroup.add(robo);

    mouseGroup.destroyEach()

    gad4.visible=true
    gad4.velocityX=-7;

  }

  if(gad4.isTouching(doraemon))
 {
  gad4.x=width/2-250;
  gad4.y=height/2-290
  gad4.velocityX=0;

 }

 if((mousePressedOver(gad4)&&(gad4.y===height/2-290)))
 {
  gsound.play();
  spawnbullet();
  gad4.x= width/2
  gad4.y= height/2+200
  gad4.visible=false
 }

 if(bulGroup.isTouching(roboGroup))
 {
   bulGroup.destroyEach()
   robo.changeAnimation("blast", blastImg);
   robo.lifetime=10;
   gad2.lifetime=300
   spawndoor()
   gad2.changeAnimation("running",gad2Img)
   gad2.scale=0.9
 }
 //console.log(gad2.velocityX)
 if(roboGroup.isTouching(doraemon))
 {
 GameState=Lose
 pdsound.play()
 }

 if(gad2Group.isTouching(doraemon))
 {

  GameState=Level2
  doraemon.destroy()
  gad2Group.destroyEach()
  
  wall13.velocityY=-4
  wall14.velocityY=-4
  wall15.velocityY=-4
  wall16.velocityY=-4
  wall13.velocityY=4
  wall14.velocityY=4
  wall15.velocityY=4
  wall16.velocityY=4
  mon1.velocityY=4
  mon2.velocityY=-4
  mon3.velocityY=4
 }


 if (gad2.lifetime<=100)
 {

  gad2.changeAnimation("walking",gad22Img)

 gad2.scale=0.6
 }

 if(frameCount % 200=== 0) 
  {
    doracake= createSprite(width/2+800, height/2+300,20,50);
    doracake.y=Math.round(random(height/2-70,height/2+10));
    doracake.addAnimation("running", cakeImg);
    doracake.scale = 0.2;
    doracake.velocityX=-5;
    doracake.lifetime=310;
    doracakeGroup.add(doracake);

   }
   if(doracakeGroup.isTouching(doraemon))
   {
    doracakeGroup.destroyEach()
    dorasc=dorasc+1
    pisound.play();
   }

drawSprites()
  textSize(70)
	fill("black");
	textFont("freestyle script");
	text("Life:",width/2-150,height/2-285)
  textSize(60)
  text("Gadgets Available:",width/2-580,height/2-290)
  fill("red");
  textSize(90)
  text(life,width/2-50,height/2-285)
  textSize(60) 
  text("❤",width/2-5,height/2-285)
  fill("black");
  textSize(60)
  text("Doracakes Collected :",width/2+100,height/2-285)
  fill("black");
  textSize(75)
  text(dorasc,width/2+455,height/2-285)
  }

  if(GameState===Level2)
  {

    background(bg6Img)
    textSize(70)
    fill("white");
    textFont("freestyle script");
    text("Life:",width/2-250,height/2-340)
    fill("red");
    textSize(90)
    text(life,width/2-130,height/2-340)
    textSize(60)
    text("❤",width/2-100,height/2-340)

    gad6.visible=true
    level2visible()
    doraemon2.visible=true
    doraemon2.changeAnimation("standing", doraemon2Img);
    doraemon2.scale=0.3
    doraemon2.setCollider("rectangle",0,0,200,370);
    about.visible=false

 if (keyDown("right")) 
{
doraemon2.x=doraemon2.x+6
doraemon2.x=doraemon2.x+0
doraemon2.scale=0.4
doraemon2.setCollider("rectangle",0,0,200,270);
 doraemon2.changeAnimation("running", doraemonImg);
}

 if (keyDown("left")) 
{
  doraemon2.x=doraemon2.x-6
  doraemon2.x=doraemon2.x+0
  doraemon2.scale=0.4
  doraemon2.setCollider("rectangle",0,0,200,270);
   doraemon2.changeAnimation("leftrunning", doraemonlev2Img);
}
 
 if (keyDown("up")) 
{
 doraemon2.y=doraemon2.y-6
 doraemon2.x=doraemon2.x-0
 doraemon2.scale=0.4
 doraemon2.setCollider("rectangle",0,0,200,270);
doraemon2.changeAnimation("running", doraemonImg);
}
 
 if (keyDown("down")) 
{

doraemon2.y=doraemon2.y+6
doraemon2.x=doraemon2.x-0
doraemon2.scale=0.4
doraemon2.setCollider("rectangle",0,0,200,270);
doraemon2.changeAnimation("running", doraemonImg);
}


if(monGroup.isTouching(doraemon2))
{
 life=life-1
 doraemon2.x=width/2-565
 doraemon2.y=height/2+230
}

 
if(mon1.isTouching(doraemon2))
{
//GameState=Lose
mon1.destroy()
 life=life-1
}

if(mon2.isTouching(doraemon2))
{
//GameState=Lose
mon2.destroy()
 life=life-1
}

if(mon3.isTouching(doraemon2))
{
//GameState=Lose
mon3.destroy()
 life=life-1
}

if(gianlev2Group.isTouching(doraemon2))
{
  gianlev23.visible=true
  gianlev2Group.destroyEach()
  score2=score2+1

}

if(shizukaGroup.isTouching(doraemon2))
{
  shizuka2.visible=true
  shizukaGroup.destroyEach()
  score2=score2+1
}

if(doramiGroup.isTouching(doraemon2))
{
  dorami2.visible=true
  doramiGroup.destroyEach()
  score2=score2+1
}

if(nobitaGroup.isTouching(doraemon2))
{
  nobita2.visible=true
  nobitaGroup.destroyEach()
  score2=score2+1
}

if(gad6Group.isTouching(doraemon2))
{
  gad7Group.destroyEach()
  doraemon2.x=width-300
  doraemon2.y=height/2-261
}

if(trGroup.isTouching(doraemon2))
{
  trGroup.destroyEach()
  score2=score2+1
  //doraemon2.y=height/2-261
}


if(score2===5)
{
GameState=Win  
}
createEdgeSprites();


    drawSprites()
    textSize(57)
    fill("white");
    textFont("freestyle script");
    text("Friends Found:",width/20-70,height/9-30)
  } 
  
  if(life===0)
  {
    GameState=Lose
  }
  if (GameState===Lose)
  {
    background(bg8Img)
    drawSprites();
    losevisible()
    var yposition=height/2-105

    textSize(70)
    fill("White");
    textFont("freestyle script");
    text("Oops! you were caught by enemies.",width/2+100,height/2-285) 
    text("Friends rescued :",width/2+150,yposition+20)
    text("Doracakes collected :"+dorasc,width/2+150,height/2+15)
    if(score2===0)
    {
      text("None yet",width/2+500,yposition+20)
    }

    gianlev23.y=yposition
    shizuka2.y=yposition
    dorami2.y=yposition
    nobita2.y=yposition
    gianlev23.x=width/2+400
    shizuka2.x=width/2+470
    dorami2.x=width/2+540
    nobita2.x=width/2+610

    home.visible=true
    res.visible=true

    if(mousePressedOver(res))
    {
      score2=0
      life=3
      dorasc=0
      GameState=Play
      home.visible=false
      res.visible=false
      gianlev23.visible=false
      shizuka2.visible=false
      dorami2.visible=false
      nobita2.visible=false
      frameCount=1
    }

    if(mousePressedOver(home))
    {
      score2=0
      life=3
      dorasc=0
      GameState=Start
      home.visible=false
      res.visible=false
      gianlev23.visible=false
      shizuka2.visible=false
      dorami2.visible=false
      nobita2.visible=false
      
    }

  }

  if (GameState===Win)
  {
    background(bg7Img)
    drawSprites();
    winvisible();

    var yposition=height/2-105

    textSize(70)
    fill("black");
    textFont("freestyle script");
    text("Congratulations!",width/2+200,height/2-285)
    text("You rescued doraemon's all friend",width/2+50,height/2-185)
    text("Friends rescued :",width/2+50,yposition+20)
    text("Doracakes collected :"+dorasc,width/2+50,height/2+15)

    home.visible=true
    res.visible=true

    gianlev23.y=yposition
    shizuka2.y=yposition
    dorami2.y=yposition
    nobita2.y=yposition
    gianlev23.x=width/2+400
    shizuka2.x=width/2+470
    dorami2.x=width/2+540
    nobita2.x=width/2+610

    if(mousePressedOver(res))
    {
      score2=0
      life=3
      dorasc=0
      GameState=Play
      home.visible=false
      res.visible=false
      gianlev23.visible=false
      shizuka2.visible=false
      dorami2.visible=false
      nobita2.visible=false
      frameCount=1
    }

    if(mousePressedOver(home))
    {
      score2=0
      life=3
      dorasc=0
      GameState=Start
      home.visible=false
      res.visible=false
      gianlev23.visible=false
      shizuka2.visible=false
      dorami2.visible=false
      nobita2.visible=false
      
    }
  }
}


function keyPressed() {
 
  if((keyCode === 32)&&(doraemon.y>=height/2+235)&&(GameState===Play)) 
  {
    doraemon.velocityY=-15;
    doraemon.changeAnimation("jumping", dorajumpImg);
    jsound.play()
  }

}  

function spawnbullet()
{
    bul=createSprite(156,325)
    bul.addAnimation("running",bulImg);
    bul.scale=0.25;
    bul.velocityX = 7;
    bul.lifetime = 570;
    bul.y=doraemon.y
    bulGroup.add(bul);
  
}     

function spawndoor()
{ 
  gad2.visible=true
  gad2.velocityX=-5;
} 
function velocity(){
mon1.velocityY=4
mon2.velocityY=4;
mon3.velocityY=4


wall13.velocityY=4
wall14.velocityY=4
wall15.velocityY=4
wall16.velocityY=4
} 

function level2visible(){
bkground1.visible=false
bkground2.visible=false
//bkground3.visible=false
mon1.visible= true
mon2.visible= true
mon3.visible= true
pl.visible=false
ins.visible=false
wall1.visible=true
wall2.visible=true
wall3.visible=true
wall4.visible=true
wall5.visible=true
wall6.visible=true
wall7.visible=true
wall8.visible=true
wall9.visible=true
wall10.visible=true
wall11.visible=true
wall12.visible=true
wall13.visible=true
wall14.visible=true
wall15.visible=true
wall16.visible=true
nobita.visible=true
shizuka.visible=true
gianlev2.visible=true
dorami.visible=true
gad6.visible=true
gad7.visible=true
treasure.visible=true
}

function startvisible(){
  pl.visible=true
  ins.visible=true

  mon1.visible= false
  mon2.visible= false
  mon3.visible= false
  wall1.visible= false
  wall2.visible= false
  wall3.visible= false
  wall4.visible= false
  wall5.visible= false
  wall6.visible= false
  wall7.visible= false
  wall8.visible= false
  wall9.visible= false
  wall10.visible= false
  wall11.visible= false
  wall12.visible= false
  wall13.visible= false
  wall14.visible= false
  wall15.visible= false
  wall16.visible= false
  nobita.visible= false
  shizuka.visible= false
  gianlev2.visible= false
  dorami.visible= false
  gad6.visible= false
  gad7.visible= false
  treasure.visible= false
}

function Playvisible()
{
  bkground1.visible=true
  bkground2.visible=true
  //bkground3.visible=true
  doraemon.visible=true
  mon1.visible= false
  mon2.visible= false
  mon3.visible= false
  pl.visible=false
  ins.visible=false
  wall1.visible= false
  wall2.visible= false
  wall3.visible= false
  wall4.visible= false
  wall5.visible= false
  wall6.visible= false
  wall7.visible= false
  wall8.visible= false
  wall9.visible= false
  wall10.visible= false
  wall11.visible= false
  wall12.visible= false
  wall13.visible= false
  wall14.visible= false
  wall15.visible= false
  wall16.visible= false
  nobita.visible= false
  shizuka.visible= false
  gianlev2.visible= false
  dorami.visible= false
  gad6.visible= false
  gad7.visible= false
  treasure.visible= false
}

function level2function()
{if(wall13.y>height-380)
  {
    wall13.velocityY=-4
  }
  
if(wall14.y>height-303)
  {
    wall14.velocityY=-4
}
  
if(wall15.y>height-227)
{
wall15.velocityY=-4
}

if(wall16.y>height-150)
{
wall16.velocityY=-4
}

if(wall13.y<height/2-410)
{
wall13.velocityY=4
}

if(wall14.y<height/2-334)
{
wall14.velocityY=4
}

if(wall15.y<height/2-258)
{
wall15.velocityY=4
}

if(wall16.y<height/2-182)
{
wall16.velocityY=4
}

if(mon1.y>height/2+290)
{
mon1.velocityY=-4
}

if(mon1.y<height/2+90)
{
mon1.velocityY=4
}

if(mon2.y<height/2-410)
{
mon2.velocityY=4
}

if(mon2.y>height/2-10)
{
mon2.velocityY=-4
}

if(mon3.y>height/2+300)
{
mon3.velocityY=-4
}

if(mon3.y<height/2+90)
{
mon3.velocityY=4
}

doraemon2.collide(wall1)
doraemon2.collide(wall2)
doraemon2.collide(wall3)
doraemon2.collide(wall4)
doraemon2.collide(wall5)
doraemon2.collide(wall6)
doraemon2.collide(wall7)
doraemon2.collide(wall8)
doraemon2.collide(wall9)
doraemon2.collide(wall10)
doraemon2.collide(wall11)
doraemon2.collide(wall12)

doraemon2.collide(invible)
doraemon2.collide(invible2)
doraemon2.collide(invible3)
doraemon2.collide(invible4)

}

function winvisible(){
  bkground1.visible=false
  bkground2.visible=false
  doraemon2.visible=false
  doraemon.visible=false
  mon1.visible= false
  mon2.visible= false
  mon3.visible= false
  pl.visible=false
  ins.visible=false
  wall1.visible=false
  wall2.visible=false
  wall3.visible=false
  wall4.visible=false
  wall5.visible=false
  wall6.visible=false
  wall7.visible=false
  wall8.visible=false
  wall9.visible=false
  wall10.visible=false
  wall11.visible=false
  wall12.visible=false
  wall13.visible=false
  wall14.visible=false
  wall15.visible=false
  wall16.visible=false
  nobita.visible=false
  shizuka.visible=false
  gianlev2.visible=false
  dorami.visible=false
  gad6.visible=false
  gad7.visible=false
  treasure.visible=false
  }

  function losevisible(){
    bkground1.visible=false
    bkground2.visible=false
    doraemon2.visible=false
    doraemon.visible=false
    mon1.visible= false
    mon2.visible= false
    mon3.visible= false
    pl.visible=false
    ins.visible=false
    wall1.visible=false
    wall2.visible=false
    wall3.visible=false
    wall4.visible=false
    wall5.visible=false
    wall6.visible=false
    wall7.visible=false
    wall8.visible=false
    wall9.visible=false
    wall10.visible=false
    wall11.visible=false
    wall12.visible=false
    wall13.visible=false
    wall14.visible=false
    wall15.visible=false
    wall16.visible=false
    nobita.visible=false
    shizuka.visible=false
    gianlev2.visible=false
    dorami.visible=false
    gad6.visible=false
    gad7.visible=false
    //treasure.visible=false
    //mouse.visible=false
    //gian.visible=false
    //box.visible=false
 
doracakeGroup.destroyEach()

    }