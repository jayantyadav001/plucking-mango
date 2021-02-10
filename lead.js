class Lead{
    constructor(bodyA, pointB){
        var option={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 5
        }
        this.pointB = pointB;
        this.lead = Constraint.create(option);
        World.add(world, this.lead);
    }
    attach(body){
		this.lead.bodyA=body;
	}
    
    fly(){
        this.lead.bodyA = null;
    }
    display(){
        if(this.lead.bodyA){
        var pointA = this.lead.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}