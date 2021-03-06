class Hammer {
    constructor(x, y, width, height) {
        var options = {
            'restitution':2,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX
        pos.y=mouseY
        push();
        translate(pos.x,pos.y)
        strokeWeight(4)
        stroke("orange")
        fill("black");
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();

    }
  }