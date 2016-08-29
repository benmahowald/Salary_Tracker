// console.log('js handshake');

var employeeList = [];
var totalAnnualSalary = 0;

var addEmployee = function () {
  // console.log('in addEmployee');

  var newEmployee = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    id: document.getElementById('idNum').value,
    title: document.getElementById('title').value,
    salary: parseInt(document.getElementById('salary').value),
  };//end newEmployee

  console.log(newEmployee);

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
    displayEmployees();
    salaryTotal();
    clearFields();
  };//end else

};//end addEmployee

var displayEmployees = function () {
  document.getElementById('userAddedEmployee').innerHTML = '';
  for (var i = 0; i < employeeList.length; i++) {
    var employeeInfo = '<h3>' + employeeList[i].first + ' ' + employeeList[i].last +
    '</h3><p>Title: ' + employeeList[i].title + '<br> ID #: ' +
    employeeList[i].id + '<br>Salary: ' + employeeList[i].salary + '</p>';
    document.getElementById('userAddedEmployee').innerHTML += employeeInfo;
    console.log(employeeList[i].salary);
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

var salaryTotal = function () {
  // console.log('in salaryTotal');
  console.log(employeeList);
  totalAnnualSalary = 0;
  for (var i = 0; i < employeeList.length; i++) {
    console.log(employeeList[i].salary);
    totalAnnualSalary += employeeList[i].salary;
    document.getElementById('salaryTotal').innerHTML = totalAnnualSalary;
  }
};//end salaryTotal

// var displaySalaryTotal = function () {
//   document.getElementById('salaryTotal').innerHTML += '';
//   for (var i = 0; i < employeeList.length; i++) {
//     var payRoll = 'Monthly pay roll:' + salaryTotal;
//
//   }
// };

;
;
;
;
