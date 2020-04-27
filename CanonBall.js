class CanonBall {
  constructor(x, y, radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = 40;
        
    World.add(world, this.body);
  };

  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER); // Set ellipseMode to CENTER
    fill(100); // Set fill to gray
    ellipse(50, 50, 30, 30); // Draw gray ellipse using CENTER mode
    //strokeWeight(4);
    //stroke("green");
    fill(255);
    circle(0, 0, this.radius);
    pop();
  };
};
