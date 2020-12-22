class Paper {
    constructor(x, y) {
      var options = {
         'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.r = 50;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  