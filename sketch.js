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
	createCanvas(650,650);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;

	star = createSprite(520,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var starBody_option={
		restitution:0.3,
		isStatic:true
	}
	starBody = Bodies.circle(650 , 30 , 5 , starBody_option);
	World.add(world, starBody);
	

	Engine.run(engine);

}

function draw() {
  background(bgImg);
  star.x=starBody.position.x;
  star.y=starBody.position.y;
  
if(star.y > 470 && starBody.position.y > 470 ){ 
	Matter.Body.setStatic(starBody,true); 
}

  drawSprites();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		fairy.x=fairy.x-100;
	}
	if(keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+100;
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false)
	}
	
}