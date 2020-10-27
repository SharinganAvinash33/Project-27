class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope=Matter.Constraint.create(option);
        World.add(world,this.Rope);

    }
    display(){
        var pos=this.Rope.bodyA.position;
        var pos2=this.Rope.bodyB.position.x+this.offsetX;
        var pos3=this.Rope.bodyB.position.y+this.offsetY;
        push()
        strokeWeight(5);
        fill(0);
        line(pos.x,pos.y,pos2,pos3);
        pop()
    }
}