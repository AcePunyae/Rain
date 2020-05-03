const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var drop,drop1,drop2,drop3,drop4,drop5

  function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  
}
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
    drop=new Drop(200,200,10,30) 
    drop1=new Drop(100,200,10,30) 
    drop2=new Drop(300,200,10,30) 
    drop3=new Drop(250,200,10,30) 
    drop4=new Drop(120,200,10,30) 
    drop5=new Drop(350,200,10,30) 

  
//drop= new Drop(200,200,50,50) 


  drop.display();
  drop1.display();
  drop2.display();
  drop3.display();
  drop4.display();
  drop5.display();
  
  
}