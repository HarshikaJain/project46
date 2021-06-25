var nobita, nobitaImg, sizuka, sizukaImg, doremon, doremonImg, dekisugi, dekisugiImg, giyaan, giyaanImg, sunio, sunioImg, gameOver, gameOverSound, checkpointSound;
var maze, wallsGroup, npcsGroup, wall, wall1, wall2, wall3, wall4, wall5, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53, wall54;
var score, highScore;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  gameOver = loadImage("images/gameOver.jpg");
  gameOverSound = loadSound("sound/gameOver.mp3");
  checkpointSound = loadSound("sound/Checkpoint.mp3");
  }
function setup() {
  database = firebase.database();
  createCanvas(windowWidth-100,windowHeight-100);
  score = 0;
  highScore = 0;

  nobita = newPc(50,20);
  nobita.addImage("nobita");
  sizuka = newNpcs(820,330);
  sizuka.addImage("sizuka");
  giyaan = newPc(129,240);
  giyaan.addImage("giyaan");
  sunio = newNpcs(550,170);
  sunio.addImage("sunio");
  doremon = newNpcs(790,50);
  doremon.addImage("doremon");
  dekisugi = newNpcs(360,120);
  dekisugi.addImage("dekisugi");

  wall1 = createSprite(80,4,10,150);
  wall1.shapeColor="white";
  wall2 = createSprite(5,110,260,10);
  wall2.shapeColor="white";
  wall3 = createSprite(130,70,10,80);
  wall3.shapeColor="white";
  wall4 = createSprite(180,5,10);
  wall4.shapeColor="white";
  wall5 = createSprite(150,180,210,10);
  wall5.shapeColor="white";
  wall6 = createSprite(50,240,10,120);
  wall6.shapeColor="white";
  wall7 = createSprite(10,350,460,10);
  wall7.shapeColor="white";
  wall8 = createSprite(110,280,10,100);
  wall8.shapeColor="white";
  wall9 =  createSprite(240,320,10,160);
  wall9.shapeColor="white";
  wall10 = createSprite(300,245,120,10);
  wall10.shapeColor="white";
  wall11 = createSprite(350,370,100,10);
  wall11.shapeColor="white";
  wall12 = createSprite(290,170,10,150);
  wall12.shapeColor="white";
  wall13 = createSprite(290,98,120,10);
  wall13.shapeColor="white";
  wall14 = createSprite(210,50,70,10);
  wall14.shapeColor="white";
  wall15 = createSprite(280,60,10,70);
  wall15.shapeColor="white";
  wall16 = createSprite(326,5,10,100);
  wall16.shapeColor="white";
  wall17 = createSprite(398,135,125,10);
  wall17.shapeColor="white";
  wall18 = createSprite(330,170,10,80);
  wall18.shapeColor="white";
  wall19 = createSprite(365,213,10,74);
  wall19.shapeColor="white";
  wall20 = createSprite(390,285,150,10);
  wall20.shapeColor="white";
  wall21 = createSprite(290,325,90,10);
  wall21.shapeColor="white";
  wall22 = createSprite(90,390,10,70);
  wall22.shapeColor="white";
  wall23 = createSprite(260,130,80,10);
  wall23.shapeColor="white";
  wall24 = createSprite(448,80,10,100);
  wall24.shapeColor="white";
  wall25 = createSprite(450,30,100,10);
  wall25.shapeColor="white";
  wall26 = createSprite(380,170,100,10);
  wall26.shapeColor="white";
  wall27 = createSprite(505,60,10,100);
  wall27.shapeColor="white";
  wall28 = createSprite(470,270,10,100);
  wall28.shapeColor="white";
  wall29 = createSprite(769,370,10,100);
  wall29.shapeColor="white";
  wall30 = createSprite(789,420,100,10);
  wall30.shapeColor="white";
  wall31 = createSprite(656,200,10,100);
  wall31.shapeColor="white";
  wall32 = createSprite(626,257,100,10);
  wall32.shapeColor="white";
  wall33 = createSprite(840,260,100,10);
  wall33.shapeColor="white";
  wall34 = createSprite(608,160,100,10);
  wall34.shapeColor="white";
  wall35 = createSprite(725,570,100,10);
  wall35.shapeColor="white";
  wall36 = createSprite(830,310,10,100);
  wall36.shapeColor="white";
  wall37 = createSprite(521,221,100,10);
  wall37.shapeColor="white";
  wall38 = createSprite(675,300,10,100);
  wall38.shapeColor="white";
  wall39 = createSprite(701,149,100,10);
  wall39.shapeColor="white";
  wall40 = createSprite(887,234,10,100);
  wall40.shapeColor="white";
  wall41 = createSprite(730,340,100,10);
  wall41.shapeColor="white";
  wall42 = createSprite(746,137,10,100);
  wall42.shapeColor="white";
  wall43 = createSprite(807,258,100,10);
  wall43.shapeColor = "white";
  wall44 = createSprite(940,260,10,100);
  wall4.shapeColor = "white";
  wall45 = createSprite(860,455,10,100);
  wall45.shapeColor = "white";
  wall46 = createSprite(920,460,10,100);
  wall46.shapeColor = "white";
  wall47 = createSprite(883,150,100,10);
  wall50.shapeColor = "white";
  wall48 = createSprite(945,290,10,100);
  wall49.shapeColor = "white";
  wall50 = createSprite(867,430,100,10);
  wall50.shapeColor = "white";
  wall51 = createSprite(980,320,10,100);
  wall51.shapeColor = "white";
  wall52 = createSprite(910,450,100,10);
  wall52.shapeColor = "white";
  wall53 = createSprite(950,420,10,100);
  wall53.shapeColor = "white";
  wall54 = createSprite(840,280,100,10);
  wall54.shapeColor = "white";
  gameOver = createSprite(300,100);
  gameOver.addImage("gameOver");
  gameOver.scale = 0.5;
  gameOver.visible = false;
  wallsGroup = createGroup();
  npcsGroup = createGroup();
}

function display(){
  nobita.display();
  giyaan.display();
  sunio.display();
  sizuka.display();
  doremon.display();
  dekisugi.display();
}
  
function draw() {
  background("pink");
  text("Score: "+ score, 500,50);
  text("High Score: "+ highScore, 350,50);

  if(highScore<score){
    highScore=score;
    checkpointSound.play();
    text("Excellent",200,50);
  }
   
  if(npcsGroup.isTouching(nobita) || wallsGroup.isTouching(nobita)){
    //nobita.velocityY = -12;
    gameOverSound.play();
  }

  if (keyDown("up")){
    nobita.y = nobita.y-3;
    }
     if (keyDown("down")){
      nobita.y = nobita.y+3;
    }
     if (keyDown("left")){
      nobita. x =nobita.x-3;
   }
     if (keyDown("right")){
      nobita.x = nobita.x+3;
    }

  drawSprites();
  }