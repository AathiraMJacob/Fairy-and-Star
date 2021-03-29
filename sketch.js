var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;
	fairy.velocityX=0;
	fairy.velocityY=0;

	star = createSprite(600, 80, 5,5);
	star.addImage(starImg);
	star.scale = 0.2;

    fairy.setCollider("circle",500,-50,100);
	fairy.debug=false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(600 , 80 , 5 , {restitution:0, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

 
  star.x= starBody.position.x 
  star.y= starBody.position.y 
  fairyVoice.play();

keyPressed();
  touching();
  drawSprites();

}

function keyPressed(){
	if (keyCode===LEFT_ARROW){
		fairy.x=fairy.x-10;
	}
	if (keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+10;

	}
	if (keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
		//star.y=star.y+20;
	}
}

function touching(){
	if (fairy.isTouching(star)){
		Matter.Body.setStatic(starBody,true);
	}
}