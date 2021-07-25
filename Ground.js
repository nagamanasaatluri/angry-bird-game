class Ground{
    constructor(){
        var order={
            isStatic:true
          }   
        this.ground = Bodies.rectangle(600,580,1200,50,order)
        this.platform = Bodies.rectangle(200,450,400,200,order)
        World.add(world, this.ground)
    }

  display() {
  rectMode(CENTER)
  fill("#654321")
  
    rect(this.ground.position.x,this.ground.position.y,1200,50)
    rect(this.platform.position.x,this.platform.position.y,400,200)
  }
}