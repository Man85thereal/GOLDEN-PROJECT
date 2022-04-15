var runner,runner2
var path_img,path2,path4

var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = []

var victoryImg

function preload(){
  runner_img= loadAnimation("runner1.png","runner2.png");
  path_img= loadImage("path.png");
  
  fuelImage = loadImage("fuel.png");
  powerCoinImage = loadImage("goldCoin.png");
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
  lifeImage = loadImage("life.png");
  blastImage=loadImage("blast.png");
  titleImage=loadImage("title.png");
  bg=loadImage("background.png");
  
}

function setup(){
  createCanvas(1900,930);


  path=createSprite(1000,500);
  path.addImage(path_img);
  path.velocityY=2
  path.visible=false

  path2=createSprite(750,500);
  path2.addImage(path_img);
  path2.velocityY=2
  path2.visible=false


  path3=createSprite(500,500);
  path3.addImage(path_img);
  path3.velocityY=2
  path3.visible=false



  path4=createSprite(1250,500);
  path4.addImage(path_img);
  path4.velocityY=2
  path4.visible=false


  runner=createSprite(500,800)
  runner.addAnimation("running",runner_img)
  runner.scale=0.1
  runner.visible=false




  runner2=createSprite(1250,800)
  runner2.addAnimation("running",runner_img)
  runner2.scale=0.1
  runner2.visible=false






  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

















function draw(){
  //background("white")

if(gameState==2){
background("black")
}
else{


  background(bg);




if(path.y>500){
path.y=400

}



if(path2.y>500){
  path2.y=400
  
  }


  if(path3.y>500){
    path3.y=400
    
    }




    if(path4.y>500){
      path4.y=400
      
      }



      if (playerCount === 2) {
        game.update(1);
      }
    
      if (gameState === 1) {
        game.play();
      }
    
      if (gameState === 2) {
        game.showLeaderboard();
        game.end();
      
      }





















      drawSprites();




      }














    }
