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


class Marker {
    constructor (color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    write (text) {

        let inkNeeded = 0;
        let index = 0;
        let result = "";

       for (let char of text ) {
        if (char !== ' ') {
            inkNeeded += 0.5;
        }
        if (this.inkPercentage >= inkNeeded) {
            result += char;
        } else {
            break; // Stop writing if ink is insufficient
        }
       }

       this.inkPercentage -= inkNeeded;
        console.log(`%c${result}`, `color: ${this.color}`);

    }

    
}

class RefillableMarker extends Marker{
    refill() {
        this.inkPercentage = 100;
        console.log('Marker refilled to 100% ink.');
    }
}



const redMarker = new Marker('red', 10);

console.log("Writing with red marker:");
redMarker.write("Hello, World! This is a test sentence.");
console.log("Remaining ink:", redMarker.inkPercentage);


const blueMarker = new RefillableMarker('blue', 5);

console.log("\nWriting with blue marker:");
blueMarker.write("This is another test sentence with less ink.");
console.log("Remaining ink:", blueMarker.inkPercentage);

console.log("\nRefilling the blue marker...");
blueMarker.refill();

console.log("Writing with refilled blue marker:");
blueMarker.write("Now the blue marker has been refilled.");
console.log("Remaining ink:", blueMarker.inkPercentage);


class Employee {
    constructor(name, position, department) {
        this.name = name;
        this.position = position;  
        this.department = department;  
    }
}


class EmployeeTable {
    constructor(employees) {
        this.employees = employees;
    }

    
    getHtml() {
        let table = `
        <table border="1" cellspacing="0" cellpadding="10">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>                    
                    <th>Department</th>                    
                </tr>
            </thead>
            <tbody>`;

       
        for (const employee of this.employees) {
            table += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
            </tr>`;
        }

        
        table += `
            </tbody>
        </table>`;

        return table;
    }
}


const bankEmployees = [
    new Employee("Margharet Mitchell", "Manager", "Finance"),
    new Employee("Jane Smith", "Analyst", "Risk Management"),
    new Employee("Hillary Clinton", "Teller", "Customer Service"),
    new Employee("Robert Brown", "Loan Officer", "Lending"),
    new Employee("Emily Davis", "HR Specialist", "Human Resources")
];


const employeeTable = new EmployeeTable(bankEmployees);


document.body.innerHTML = employeeTable.getHtml();