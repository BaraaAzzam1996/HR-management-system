'use strict'
function Management (id,name,departement,Level,img,salary){
   this. EmlpoyeeId=id;
   this. FullName=name;
   this. Departement=departement;
   this. level=Level;
    this.image=img;
    this.Salary=salary;
}
   

function generateEmployeeId() {
    let employeeId;
    const usedIds = new Set();
  
    do {
      employeeId = Math.floor(Math.random() * 9000) + 1000;
    } while (usedIds.has(employeeId));
  
    usedIds.add(employeeId);
    return employeeId;
  }
            
 function calculateSalary(level){
    let salaryRange={
        Senior: { min: 1500, max: 2000 },
    Midsenior: { min: 1000, max: 1500 },
    Junior: { min: 500, max: 1000 },
    }

 let minSalary = salaryRange[level].min;
  let maxSalary = salaryRange[level].max;
  let randomSalary = Math.floor(minSalary + Math.random() * (maxSalary - minSalary + 1));
  let netSalary = randomSalary - (randomSalary * 0.075); 
  return netSalary;
};

let Ghazi= new Management(generateEmployeeId,"Ghazi Samer","Adminstration","senior","path/to/ghazi.jpg",calculateSalary("Senior"));
let Lana= new Management(generateEmployeeId,"Lana Ali","Finance","Senior","path/to/Lana.jpg",calculateSalary("Senior"));
let  Tamara=new Management(generateEmployeeId,"Tamara Ayoub","Marketing","senior","path/to/Tamara.jpg",calculateSalary("Senior"));
let Safi =new Management(generateEmployeeId,"Safi Waleed","Administration","Mid-Senior","path/to/Safi.jpg",calculateSalary("Midsenior"));
 let omar=new Management(generateEmployeeId,"Omar Zaid","Development","Senior","path/to/omar.jpg",calculateSalary("Senior"));           
 let Rana=new Management(generateEmployeeId,"Rana Saleh","Development","Junior","path/to/rana.jpg",calculateSalary("Junior"));
 let Hadi=new Management(generateEmployeeId,"Hadi Ahmad","Finance","Mid-Senior","path/to/hadi.jpg",calculateSalary("Midsenior"));
 let employees = [Ghazi, Lana, Tamara, Safi, omar, Rana, Hadi];
 Management.prototype.renderEmployees=function()
  {
  let employeeList = "";
  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    employeeList += "Employee name: " + employee.FullName + "<br>";
    employeeList +="Departement:    "+employee.Departement+"<br>";
    employeeList += "Employee salary: " + employee.Salary + "<br><br>";
  }
  document.getElementById("employee-list").innerHTML = employeeList;
}
Ghazi.renderEmployees();
Lana.renderEmployees();
Tamara.renderEmployees();
Safi.renderEmployees();
omar.renderEmployees();
Rana.renderEmployees();
Hadi.renderEmployees();
Hadi.renderEmployees();




  


 
 

 


   
  
  