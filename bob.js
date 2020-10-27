class bob{
    constructor(x,y){
        var option={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,25,option);
        World.add(world,this.body);    
    }
    display(){
        ellipseMode(CENTER);
        fill("red");
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,50,50);
        pop();
    }
}