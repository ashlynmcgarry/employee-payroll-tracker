// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
const employees = [];

let addNextEmployee = true;
while (addNextEmployee) {
  let firstName = prompt('Enter employee first name');
  let lastName = prompt('Enter employee last name');
  let salary = prompt('enter employee salary');

if (isNaN(salary)) {
  alert('Value is not a number, salary will default to $0')
  salary = 0;
    }
  
employees.push({
    firstName: firstName,
    lastName: lastName,
    salary: (Number(salary))
    });
  
let nextEmployee = confirm('Would you like to add another employee?');
if (nextEmployee != true) {
  addNextEmployee = false; 
  }
}
return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sum = 0;
  for(let i = 0; i <employeesArray.length; i++) {
    sum += employeesArray[i].salary; }
  let salaryAverage = sum / employeesArray.length;

  console.log(`The average salary between our ${employeesArray.length} employees is $${salaryAverage}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomWinner = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomWinner];
  console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName} you have won the random employee draw!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
