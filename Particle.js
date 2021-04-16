class Particle{
    constructor(x,y,radius){
        var options = {
            restitution : 0.4

        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.r = radius;
        this.color = color(random(0,255), random(0,255), random(0,255));
        
    }
    display(){
        
        var pos2 = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos2.x, pos2.y);
        rotate(angle);
        noStroke(); 
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}