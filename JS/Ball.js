class Ball {

    constructor(x, y, r) {

        var options = {

            'frictionAir' : 0.005,
            'density' : 1.0

        }

        this.body = Bodies.circle(x, y, r / 3, options);
        this.r = r;

        World.add(myWorld, this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("white");
        fill("brown");
        ellipse(0, 0, this.r, this.r);
        pop();

    }

}