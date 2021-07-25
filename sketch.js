const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var bgimg
var score=0
var gamestate="onsling"
var chances=3
function preload (){
 var d = new Date();
var n = d.getHours();
if(n>5&&n<19){
  bgimg=loadImage("images/bg.png")  
}
else{
  bgimg=loadImage("images/bg2.jpg")
}
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world; 
  
 road=new Ground()
 

  Box2=new Box(700,500,100,100)
 Box1=new Box(1000,500,100,100)
 log1=new Log(848,445,400,20)
 Box3=new Box(700,300,100,100)
 Box4=new Box(1000,300,100,100)
 log2=new Log(850,200,400,20)
 pig1=new Pigs(850,500,80,80)
 pig2=new Pigs(841,384,80,80)
 bird1=new Bird(250,50,100,100)
 log3=new Log(150,400,100,20)
chain1=new Chain(bird1.body,{x:200 ,y:200 })



}

function draw() {
  background(0);
   image(bgimg,0,0,1200,600)
Engine.update(engine); 
fill("#ACE7FF")
textSize(20)
Box2.display()
text(" score= "+score,888,44)
text("chances="+chances,900,75)
Box1.display()
road.display()
log1.display()
Box3.display()
Box4.display()
log2.display()
pig1.display()
pig2.display()
bird1.display()
log3.display()
chain1.display()



}

function mouseDragged(){
if(gamestate==="onsling"){
  Matter.Body.setPosition(bird1.body,{x:mouseX ,y:mouseY })
}
console.log("bird1")
}

function mouseReleased() {
 chain1.disconnectBird()
 gamestate="launched"
}
function keyPressed() {
  if(keyCode===32&&chances>1){
  gamestate="onsling"
  chances=chances-1
    Matter.Body.setPosition(bird1.body,{x:100,y:200});
    chain1.attach(bird1.body);
   bird1. trajectory=[]

  }
}