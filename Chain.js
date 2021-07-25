class Chain{ 
    constructor(p,q){
        var options = {
             bodyA: p,
             pointB: q, 
             stiffness: 0.04,
              length: 5
             }

        this.chain = Constraint.create(options); 
        World.add(world, this.chain);
        this.img1 = loadImage('images/sling1.png');
        this.img2= loadImage('images/sling2.png');
    }


   
   
    display(){ 
      image(this.img1,241,150) 
      image(this.img2,210,153) 
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position; 
            var pointB = this.chain.pointB;
            if(this.chain.bodyA.position.x<180){
                strokeWeight(4);
                line(pointA.x-35, pointA.y, pointB.x+20, pointB.y-15);
                line(pointA.x+40, pointA.y, pointB.x+60, pointB.y-15); 
            }
            else{
                strokeWeight(7);
                line(pointA.x-35, pointA.y, pointB.x+20, pointB.y-15);
                line(pointA.x+40, pointA.y, pointB.x+60, pointB.y-15); 
            }
            
        
        }
        
}
    disconnectBird(){
     this.chain.bodyA=null
    }
    attach(body){
        this.chain.bodyA=body;
    }
}



