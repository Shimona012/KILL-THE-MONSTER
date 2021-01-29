const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28;
var engine,world;
var bgimg;
var hero,ROPE;
var monster;
function preload() {
//preload the images here
bgimg= loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

 engine=Engine.create();
  world=engine.world;
 /* if(monster.y>1000 && monster.x>1500){
    fill("blue");
    textSize(30);
    text("Game Over",1500,400);
  }*/
  ground= new Ground(600,600,2000,20);
  b1= new Box(900);
  b2= new Box(900);
  b3= new Box(900);
  b4= new Box(900);
  b5= new Box(900);
  b6= new Box(900);
  b7= new Box(800);
  b8= new Box(800);
  b9= new Box(800);
  b10= new Box(800);
  b11= new Box(800);
  b12= new Box(800);
  b13= new Box(700);
  b14= new Box(700);
  b15= new Box(700);
  b16= new Box(700);
  b17= new Box(700);
  //b18= new Box(700);
  b19= new Box(700);
  b20= new Box(700);
  b21= new Box(600);
  b22= new Box(600);
  b23= new Box(600);
  b24= new Box(600);
  b25= new Box(600);
  b26= new Box(600);
  b27= new Box(600);
  b28= new Box(600);
  monster=new Monster(1300,100,320,320);
  hero=new Hero(200,400,200);
  ROPE=new Rope(hero.body,{x:500,y:50});
}

// shimona error resolved ?
/*Uncaught TypeError: this.image is not a function
    at Hero.display (hero.js:21)
    at draw (sketch.js:87)
    at p5._main.default.redraw (p5.js:65953)
    at _draw (p5.js:58869)*/ 
    // ok lets check hero class
function draw() {
  background(bgimg);
  Engine.update(engine); 
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
 // b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  hero.display();
  ROPE.display();
  monster.display();
 
}

function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }
