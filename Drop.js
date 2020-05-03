class Drop {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
         // 'friction':1,
          'density':1.0,
          
      }
    this.body = Bodies.rectangle(x, y, width, height,);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      console.log("HI");
     // push();
      //translate(pos.x, pos.y);
     // rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      //pop();
    }
  };