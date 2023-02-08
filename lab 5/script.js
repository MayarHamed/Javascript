class Person {
    #healthRate = 50;
    constructor(fullName, money, sleepMode) {
        this.name = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        //this.#healthRate = healthRate;
    }
    set healthRate(value) {
        if (value < 0 || value > 100) {
            this.#healthRate = 100;
        }
        else {
            this.#healthRate = value;
        }
    }
    get healthRate() {
        return this.#healthRate;
    }
    sleep(hours) {
        if (hours < 7) {
            return "tired";
        }
        if (hours > 7) {
            return "lazy";
        }
        else {
            return "happy";
        }
    }
    eat(meals) {
        if (meals == 3) {
            this.#healthRate = 100;
        }
        if (meals == 2) {
            this.#healthRate = 75;
        }
        if (meals == 1) {
            this.#healthRate = 50;
        }
    }
    buy(item) {
        this.money = this.money - (item * 10);
    }
}
class Employee extends Person {
    #salary = 1000;
    constructor(fullName, money, sleepMode, id, email, workMode, isManager) {
        super(fullName, money, sleepMode);
        this.id = id;
        this.email = email;
        this.workMode = workMode;
        //this.#salary = salary;
        this.isManager = isManager;
    }
    set salary(value) {
        if (value < 1000) {
            this.#salary = 1000;
        }
        else {
            this.#salary = value;
        }
    }
    get salary() {
        return this.#salary;
    }
    work(hours) {
        if (hours > 8) {
            return "tired";
        }
        if (hours < 8) {
            return "lazy";
        }
        else {
            return "happy";
        }
    }
}
class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployee(empID) {
        var emp = this.employees.find(function (element) {
            if (element.id == empID) {
                return element
            }
        })
        return emp;
    }
    hire(emp) {
        this.employees.splice(0, 0, emp);
    }
    fire(empId) {
        this.employees.forEach(element => {
            if (element.id == empId) {
                this.employees.splice(this.employees.indexOf(element), 1);
            }
        });
    }
}

var employees = [];
var office = new Office("first office", employees);
var offices = [office];
offID = 0;
autoID = 0

alert(`welcome to your office: ${offices[offID].name}`);
do {
    operation = prompt("choose operation you want to perform: \n 1. hire employee \n 2. fire employee \n 3. get all employees \n 4. get a specific employee \n 5. create a different office \n 6. exit app");
    if (operation == "1") { //hire
        //fullName, money, sleepMode, id, email, workMode, isManager
        var emp_name = prompt("please enter employee name");
        var emp_money = prompt("please enter employee money balance");
        var emp_sleepMode = prompt("please enter employee sleeping mood");
        var emp_healthRate = Number(prompt("please enter employee health rate"));
        var emp_email = prompt("please enter employee email");
        var emp_id = autoID;
        var emp_workMode = prompt("please enter employee work mode");
        var emp_salary = Number(prompt("please enter employee salary"));
        var emp_isManager = prompt("is this employee a manager?");

        let emp = new Employee(emp_name, emp_money, emp_sleepMode,emp_id,emp_email, emp_workMode, emp_isManager);
        emp.salary=emp_salary;
        emp.healthRate=emp_healthRate;
        offices[offID].hire(emp);
        autoID++;
    }

    if (operation == "2") { //fire
        firedEmp = prompt("please enter id of the employee you need to fire")
        offices[offID].fire(firedEmp);
        alert(`employee ${firedEmp} is fired!`);
    }

    if (operation == "3") { //get all
        empList = offices[offID].getAllEmployees();
        if (empList.length == 0) {
            alert("this office has no employees yet");
        }
        else {
            //fullName, money, sleepMode, healthRate, id, email, workMode, salary, isManager
            alert(`Employees in this office are: \n `);
            empList.forEach(element => {
                alert(
                    `name: ${element.name} \n
                    money balance: ${element.money} \n
                    sleep mode: ${element.sleepMode} \n
                    health rate: ${element.healthRate} \n
                    id: ${element.id} \n
                    email: ${element.email} \n
                    work mode: ${element.workMode} \n
                    salary: ${element.salary} \n
                    manager: ${element.isManager} `
                ); //`name: ${element.fullName} \n id: ${element.id}`
            });
        }
    }

    if (operation == "4") { //get one
        empID = prompt("please enter id of the employee you need to find")
        desiredEmp = offices[offID].getEmployee(empID)
        if (desiredEmp == null) {
            alert("employee doesn't exist");
        }
        else {
            alert(
                `name: ${desiredEmp.name} \n
                money balance: ${desiredEmp.money} \n
                sleep mode: ${desiredEmp.sleepMode} \n
                health rate: ${desiredEmp.healthRate} \n
                id: ${desiredEmp.id} \n
                email: ${desiredEmp.email} \n
                work mode: ${desiredEmp.workMode} \n
                salary: ${desiredEmp.salary} \n
                manager: ${desiredEmp.isManager} `);
        }
    }

    if (operation == "5") { //new office
        offID++;
        newEmp = [];
        newOffice = new Office(`Office ${offID}`, newEmp)
        offices.push(newOffice);
        alert(`welcome to your office: ${offices[offID].name}`);
    }
    if (operation == "6") { //new office
        alert("bye!");
        break;
    }

} while (operation != null || operation.length <= 0); //giving user option to do another operation untill they click cancel