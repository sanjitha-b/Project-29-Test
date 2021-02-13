
    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    
    var engine, world;
var b1,ground
function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground (600,390,1200,30)
stand1 = new Ground(600,340,250,10)
stand2 = new Ground(860,170,200,10)

polygon = Bodies.circle(50,200,20)

World.add(world,polygon)
//Slingshot = new SlingShot(polygon.body,{

  //  x:200, y:200

b1 = new Box (600,320)
b2 = new Box (570,320)
b3 = new Box (540,320)
b4 = new Box (510, 320)
b5 = new Box (630,320)
b6 = new Box (660,320)
b7 = new Box (690, 320)

b8 = new Box (600, 280)
b9 = new Box (570, 280)
b10 = new Box (540, 280)
b11 = new Box (630, 280)
b12 = new Box (660, 280)

b13 = new Box(600, 240)
b14 = new Box(570,240)
b15= new Box(630,240)

b16 = new Box(600,200)

b17 = new Box(920,16)
b18= new Box(890,160)
b19= new Box(860,160)
b20 = new Box(830,160)
b21 = new Box(800,160)

b22 = new Box(890,120)
b23 = new Box(860, 120)
b24 = new Box(830,120)
b25 = new Box(860,80)
}

function draw(){


background ("black")
Engine.update(engine)

fill("lightblue")
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()

fill("purple")
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()

fill("green")
b13.display()
b14.display()
b15.display()


fill("white")
b16.display()

fill("lightblue")
b17.display()
b18.display()
b19.display()
b20.display()
b21.display()

fill ("purple")
b22.display()
b23.display()
b24.display()

fill("red")
ground.display()
stand1.display()
stand2.display()



}

//fill("black")
//Slingshot.display()







