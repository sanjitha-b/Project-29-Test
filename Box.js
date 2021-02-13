
  class Box {
    constructor(x,y) {
      var options = {
       // restitution : 0.1,
        density: 1.5
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()

      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    pop()
    }
  };


