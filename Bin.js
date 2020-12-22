class Bin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true})
        this.Leftbody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true})
        this.Rightbody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true})

    }
    display(){
        var posBottom = this.bottombody.position
        push();
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        //strokeWeight(4);
        stroke(255)
        angleMode(RADIUS)
        fill(255)   
        rect(0, 0, this.width, this.thickness);
        pop();
        
        var posLeft = this.Leftbody.position
        push();
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        //strokeWeight(4);
        stroke(255)
        angleMode(RADIUS)
        fill(255)   
        rect(0, 0, this.thickness, this.height);
        pop();

        var posRight = this.Rightbody.position
        push();
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        //strokeWeight(4);
        stroke(255)
        angleMode(RADIUS)
        fill(255)   
        rect(0, 0, this.thickness, this.height);
        pop();

    }

}
