class Pigs extends Base{
    constructor(a,s,d,w) {
  super(a,s,d,w)
  this.img = loadImage('images/enemy.png');

    }
    display(){
   if(this.body.speed<3){
   super.display()
   }
   else{
    World.remove(world,this.body);
    score+=1
   }



    }
    }
















