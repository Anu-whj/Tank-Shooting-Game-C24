class Cannon {
    constructor(x,y,width,height,angle) {
      var options = {
          //restitution: 0,
          friction: 1.0,
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,angle,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };