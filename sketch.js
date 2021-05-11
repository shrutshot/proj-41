const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var thunder1,thunder2, thunder3, thunder4, thunder;
var engine, world;
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame = 0;


function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);
    umbrella = new Umbrella(200,500);   
   
    
}

function draw(){
    canvas = createCanvas(400,400);
    for( var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
    umbrella.display();
    drop.showDrop();

    
}   

