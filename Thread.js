class Thread{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
           bodyB:bodyB,
            stiffness: 0.04,
            length: 100
        }
        this.thread= Constraint.create(options);
        World.add(world, this.thread);
      
    }

    display(){
push();
     stroke('black');
     strokeWeight(8);
    line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y) 
    pop();   
       
    }
}