class Bird extends Base{
    constructor(a,s,d,w) {
    super(a,s,d,w)
    this.img = loadImage('images/bird.png');
    this.img1 = loadImage('images/smoke.png');
    
    this.trajectory=[]
    }
    display(){
    
    super.display()
    if(this.body.speed>20&&this.body.position.x>250){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);  
     
    }


    for( var g=0    ; g<this.trajectory.length    ;g+=1     ){
    console.log()
     image(this.img1 , this.trajectory[g][0] , this.trajectory[g][1])
     }

    }
    }

    








    