class circleDiscription {
    constructor(radius){
        this._radius = radius;
    }

    get radius (){
    return this._radius;
    }

    set radius (value) {
        if(value < 0 ) {
            console.log(`Radius must be a positive number`);
        } else
        {
            this._radius = value;
            console.log(value);
        }
    }

    get diameter () {
        return this._radius*2;
    }

    calculateArea (){
        return Math.PI * Math.pow(this._radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this._radius;
    }
} 

const myCircle = new circleDiscription(5);

console.log("Radius:", myCircle.radius); 
console.log("Diameter:", myCircle.diameter); 
console.log("Area:", myCircle.calculateArea().toFixed(2)); 
console.log("Circumference:", myCircle.calculateCircumference().toFixed(2)); 

