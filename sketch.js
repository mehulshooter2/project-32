const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var score = 0;

function preload(){

polygonImg = loadImage("sprites/polygon.png")

}

function setup(){
    createCanvas(1200,550);
    engine = Engine.create();
    world = engine.world;


    ball = new Ball(100,250,20);
    sling = new Launcher(ball.body,{x:100,y:250});
    platform = new Ground(500,400,300,20);
    platform2 = new Ground(800,170,200,20);
    ground = new Ground(600,540,1200,20);
    
    box1 = new BlueBox(500,360,20,30);
  box2 = new YellowBox(520,360,20,30);
  box3 = new GreenBox(540,360,20,30);
  box4 = new RedBox(560,360,20,30);
  box5 = new GreenBox(580,360,20,30);
  box6 = new YellowBox(600,360,20,30);

  box7 = new RedBox(510,330,20,30);
  box8 = new YellowBox(530,330,20,30);
  box9 = new BlueBox(550,330,20,30);
  box10 = new GreenBox(570,330,20,30);
  box11 = new RedBox(590,330,20,30);

  box12 = new YellowBox(520,310,20,30);
  box13 = new BlueBox(540,310,20,30);
  box14 = new RedBox(560,310,20,30);
  box15 = new GreenBox(580,310,20,30);

  box16 = new YellowBox(530,280,20,30);
  box17 = new RedBox(550,280,20,30);
  box18 = new GreenBox(570,280,20,30);

  box19 = new BlueBox(540,250,20,30);
  box20 = new RedBox(560,250,20,30);

  box21 = new GreenBox(550,220,20,30);

  box22 = new GreenBox(750,135,20,30);
  box23 = new BlueBox(770,135,20,30);
  box24 = new YellowBox(790,135,20,30);
  box25 = new RedBox(810,135,20,30);
  box26 = new GreenBox(830,135,20,30);
  box27 = new YellowBox(850,135,20,30);

  box28 = new BlueBox(760,105,20,30);
  box29 = new RedBox(780,105,20,30);
  box30 = new YellowBox(800,105,20,30);
  box31 = new GreenBox(820,105,20,30);
  box32 = new RedBox(840,105,20,30);

  box33 = new YellowBox(770,75,20,30);
  box34 = new BlueBox(790,75,20,30);
  box35 = new RedBox(810,75,20,30);
  box36 = new GreenBox(830,75,20,30);
  
  box37 = new YellowBox(780,45,20,30);
  box38 = new BlueBox(800,45,20,30);
  box39 = new GreenBox(820,45,20,30);



}

function draw(){
  background("white");
  rectMode(CENTER);
  Engine.update(engine);

  text("SCORE :" + score,200,50);


  ground.display();
  sling.display();
  box1.display();
  platform.display();
  platform2.display();
  ball.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box17.display();
  box16.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box11.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box17.score();
  box16.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box11.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();


}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
   
}

function mouseReleased(){
 
    sling.fly();

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(ball.body,{x:100,y:250});
		sling.attach(ball.body);
	}
}
