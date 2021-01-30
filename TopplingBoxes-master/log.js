class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      /*PI stands for the mathematical pi symbol(PI in radians = 180 degrees)
Most computer programs use the unit"radians" for degrees.
In the unit of radians:
PI = 180 degrees;
PI/2 = 90 degrees;
PI/4 = 45 degrees and so on*/

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke(153, 76, 0);
      fill(204, 102, 0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  