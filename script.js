// console.log('js handshake');

var employeeList = [];
var totalAnnualSalary = 0;
var verbose = false;

var addEmployee = function () {
  if (verbose) console.log('in addEmployee');

  var newEmployee = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    id: document.getElementById('idNum').value,
    title: document.getElementById('title').value,
    salary: Number(document.getElementById('salary').value),
  };//end newEmployee

  if (verbose) console.log(newEmployee);

  //check to see that all the form fields were filled out
  if (newEmployee.first == '' || newEmployee.last == '' || newEmployee.id == ''
  || newEmployee.title == '' || newEmployee.salary == '') {

    //select all inputs and set the border color to red if blank
    var required = document.querySelectorAll('input');
    for (var i = 0; i < required.length; i++) {
      if (required[i].value == '') {
        required[i].style.border = '1px solid red';
      }//end if
    }//end for

    alert('Please complete the entire form.');
  } else {
    resetBorders();
    employeeList.push(newEmployee);
    alphabetize();
    displayEmployees();
    salaryTotals();
    clearFields();
  };//end else

};//end addEmployee

var displayEmployees = function () {
  document.getElementById('userAddedEmployee').innerHTML = '';
  for (var i = 0; i < employeeList.length; i++) {
    var employeeInfo = '<h3>' + employeeList[i].last + ', ' + employeeList[i].first +
    '</h3><p>Title: ' + employeeList[i].title + '<br> ID #: ' +
    employeeList[i].id + '<br>Salary: ' + employeeList[i].salary.toLocaleString
    ('USD', { style: 'currency', currency: 'USD' }) + '</p>';
    document.getElementById('userAddedEmployee').innerHTML += employeeInfo;
    if (verbose) console.log(employeeList[i].salary);
  }//end for

};//end displayEmployees

var clearFields = function () {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('idNum').value = '';
  document.getElementById('title').value = '';
  document.getElementById('salary').value = '';
}; //end clearFields

var resetBorders = function () {
  var reset = document.querySelectorAll('input');
  for (var i = 0; i < reset.length; i++) {
    reset[i].style.border = '1px solid #51525e';
  }//end for

};//end resetBorders

var salaryTotals = function () {
  // console.log('in salaryTotal');
  // console.log(employeeList);
  totalAnnualSalary = 0;
  for (var i = 0; i < employeeList.length; i++) {
    // console.log(employeeList[i].salary);
    totalAnnualSalary += employeeList[i].salary;
    var monthlySalary = totalAnnualSalary / 12;
    monthlySalary = Number(monthlySalary).toLocaleString
    ('USD', { style: 'currency', currency: 'USD' });
    document.getElementById('salaryTotal').innerHTML = monthlySalary;
  }
};//end salaryTotal

var alphabetize = function () {
  employeeList.sort(function (a, b) {
    var nameA = a.last.toUpperCase(); // ignore upper and lowercase
    var nameB = b.last.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    // names must be equal

    return 0;
  });
};
