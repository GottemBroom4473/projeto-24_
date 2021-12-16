class ferro {
    constructor(x,y,width,height){
     var options = {
        restitution:0.8,
        friction:3,
        density:30
     }
     this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop()
    }

}