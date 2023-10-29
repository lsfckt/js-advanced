class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        } else if (salary < 0) {
            throw new Error('Invalid input!');
        }

        const newEmployee = {
            name,
            salary: Number(salary),
            position,
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(newEmployee)

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartment = '';
        let maxSalary = 0;

        Object.entries(this.departments).forEach(([currDepartment, departmentEmployees]) => {
            let avgSalary = 0;
            let totalDepartmentSalary = 0;

            departmentEmployees.forEach(currEmployee => {
                totalDepartmentSalary += currEmployee.salary;
            });

            avgSalary = totalDepartmentSalary / departmentEmployees.length;

            if (avgSalary > maxSalary) {
                bestDepartment = currDepartment;
                maxSalary = avgSalary;
            }
        });

        let output = `Best Department is: ${bestDepartment}\nAverage salary: ${maxSalary.toFixed(2)}\n`

        Object
            .values(this.departments[bestDepartment])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(el => {
                let curEmp = `${el.name} ${el.salary} ${el.position}\n`;
                output += curEmp;
            });

        return output.trim();
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer

