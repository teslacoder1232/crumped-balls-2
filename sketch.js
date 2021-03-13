const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side1,side2,bottom;

function preload(){
dustimg  = loadImage("dustbingreen.png");
paperimg = loadImage("paper.png");
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

  

	 paper = new Paper(100, 600,10);
   paper.addImage("paper",paperimg);
     ground = new Ground(400, 680, 800, 20);
  
     side1= new Dustbin(540, 605, 20, 130);
     side2= new Dustbin(730, 605, 20, 130);
     bottom = new Dustbin(635, 660, 170, 20);
     bottom.addImage("bottom",dustimg);
     Engine.run(engine);
    
  
}


function draw() {

  rectMode(CENTER);
  background(0);



  Engine.update(engine);
  paper.display();

  ground.display();

  side1.display();
  side2.display();
  bottom.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  }
 

