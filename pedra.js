class pedra {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.8,
          friction:0.9,
          density:12
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
        fill("grey");
        rect(0,0,this.width,this.height);
        pop()
    }
  };

  //o quadrado da pedra esta gigante e nao se move,
  //tamebem pedir ajuda para fazer a classe do ferro 