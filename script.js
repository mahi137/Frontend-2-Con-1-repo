let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    const developers = arr.filter(arr => arr.profession === "developer");
    console.log("developers:",developers);
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id:4,name:"susan",age:20,profession:"intern"};
    arr.push(newEmployee);
    console.log("Array after adding new employee:",arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredEmployees = arr.filter(arr =>arr.profession !=="admin");
    console.log("Array after removing admins:",filteredEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const additionalEmployees=[
        {id:5,name:"james",age:22,profession:"developer"},
    {id:6,name:"emma",age:21,profession:"intern"}];
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }