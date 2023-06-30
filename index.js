// Write your solution in this file!

const employee = {
    name: 'Sam'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = Object.assign({}, employee);
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 
  const empLoyee = {
    name: 'Sam',
    streetAddress: 'Old Street'
  };
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'));
  console.log(employee);
  
  function deleteFromEmployeeByKey(employee, key) {
    // 
    let newEmployee = Object.assign({}, employee);
  
    // 
    delete newEmployee[key];
  
    // 
    return newEmployee;
  }
  
  // 
  let emPloyee = {
    name: 'Sam',
    age: 30,
    role: 'Developer'
  };
  
  let newEmployee = deleteFromEmployeeByKey(employee, 'name');
  console.log(newEmployee['name']); // 
  console.log(typeof newEmployee); // 
  
  // 
  console.log(employee['name']); // Sam
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Employee usage
  let eMployee = { name: 'John', age: 30, position: 'Manager' };
  