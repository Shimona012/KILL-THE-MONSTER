class Box{
    constructor(x){
        var Options={
        restitution:0.8,
        density:20,
        friction:1
        }
        this.body=Bodies.rectangle(x,100,70,70,Options);
        this.width=70;
        this.height=70;
        World.add(world,this.body);
        }
        display(){
         var pos=this.body.position;
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red") ;   
        rect(0,0,this.width,this.height);
        pop();
        }
    
}
