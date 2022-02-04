


const e1 = {
  name: "eddy",
  companyTenureDays: 400,
  performance: 0.90,
  salary: 1200000,
  position: "developer",
}

const e2 = {
  name: "jack",
  companyTenureDays: 520,
  performance: 0.70,
  salary: 1700000,
  position: "developer",
}

const e3 = {
  name: "Jenny",
  companyTenureDays: 380,
  performance: 0.90,
  salary: 1900000,
  position: "manager",
}

const e4 = {
  name: "Marco",
  companyTenureDays: 401,
  performance: 0.90,
  salary: 1400000,
  position: "chief",
}

// Constants
const developerIncrease = 0.02;
const managerIncrease = 0.01;
const chiefIncrease = 0.01;
const minPerformance = 0.85;
const minChiefSalary = 1500000;
const minDeveloperSalary = 1000000;
const minManagerSalary = 2000000;
const position = ["manager", "chief", "developer"];
const minTenure = 365;


document.getElementById("inputMinTenure").value = String(minTenure);
document.getElementById("inputMinPerformance").value = String(minPerformance*100)+"%";

document.getElementById("inputMinManagerSalary").value = String(minManagerSalary);
document.getElementById("inputManagerIncrease").value = String(managerIncrease*100)+"%";

document.getElementById("inputMinChiefSalary").value = String(minChiefSalary);
document.getElementById("inputChiefIncrease").value = String(chiefIncrease*100)+"%";

document.getElementById("inputMinDeveloperSalary").value = String(minDeveloperSalary);
document.getElementById("inputDeveloperIncrease").value = String(developerIncrease*100)+"%";

function salaryIncrease(employee){
  // Evaluation
  let passPerformance = false;
  let passSalary = false;
  let passTenure = false;

  // Variables
  let increaseAmount = 0;
  let finalSalary = 0;
  
  // Validate Tenure
  if(employee.companyTenureDays > minTenure){
    // Validate Performance
    if(employee.performance > minPerformance){
      // Validate Manager Position
      if(employee.position == position[0]){
        // Validate Salary
        if(employee.salary < minManagerSalary){
          // calculate salary increase
          increaseAmount = employee.salary * managerIncrease;
          // add salary increase to salary
          finalSalary = increaseAmount + employee.salary;
          // possitive action message
          console.log("The salary of ",employee.name, " was increased from", employee.salary, " to ",finalSalary);
          // set the new salary on the employee
          employee.salary = finalSalary;
        }
        else{
          // negative action message
          console.log(employee.name," salary is more than ", minManagerSalary);
        }
      }
      // Validate Chief Position
      if(employee.position == position[1]){
        // Validate Salary
        if(employee.salary < minChiefSalary){
          // calculate salary increase
          increaseAmount = employee.salary * chiefIncrease;
          // add salary increase to salary
          finalSalary = increaseAmount + employee.salary;
          // possitive action message
          console.log("The salary of ",employee.name, " was increased from", employee.salary, " to ",finalSalary);
          // set the new salary on the employee
          employee.salary = finalSalary;
        }
        else{
          // negative action message
          console.log(employee.name," salary is more than ", minChiefSalary);
        }
      }
      // Validate Developer Position
      if(employee.position == position[2]){
        // Validate Salary
        if(employee.salary < minDeveloperSalary){
          // calculate salary increase
          increaseAmount = employee.salary * developerIncrease;
          // add salary increase to salary
          finalSalary = increaseAmount + employee.salary;
          // possitive action message
          console.log("The salary of ",employee.name, " was increased from", employee.salary, " to ",finalSalary);
          // set the new salary on the employee
          employee.salary = finalSalary;
        }
        else{
          // negative action message
          console.log(employee.name," salary is more than ", minDeveloperSalary);
        }
      }
    }
    else{
      console.log(employee.name," performance is less than ", minPerformance);
    }
  }
  else {
    console.log(employee.name," tenure is less than ", minTenure);
  }
}

