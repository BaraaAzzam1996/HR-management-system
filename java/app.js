
let Ghazi={
    EmployeeId:generateEmployeeId(),
    FullName:"Ghazi Samer",
    Departement:"Administration",
    level:"Senior",
    imageURL: "path/to/ghazi.jpg",
    Salary:calculateSalary("Senior"),
    
}
let Lana={
    EmployeeId:generateEmployeeId(),
    FullName:"Lana Ali",
    Departement:"Finace",
    level:"Senior",
    imageURL: "path/to/Lana.jpg",
    Salary:calculateSalary("Senior"),
    
}
let Tamara={
    EmployeeId:generateEmployeeId(),
    FullName:"Tamar Ayoub",
    Departement:"Marketing",
    level:"Senior",
    imageURL: "path/to/Tamara.jpg",
    Salary:calculateSalary("Senior"),
    
}
let Safi={
    EmployeeId:generateEmployeeId(),
    FullName:"Safi Waleed",
    Departement:"Administration",
    level:" Mid-Senior",
    imageURL: "path/to/Safi.jpg",
    Salary:calculateSalary("Midsenior"),
    
}
let omar={
    EmployeeId:generateEmployeeId(),
    FullName:"Omar Zaid",
    Departement:"Development",
    level:"Senior",
    imageURL: "path/to/omar.jpg",
    Salary:calculateSalary("Senior"),
    
}
let Rana={
    EmployeeId:generateEmployeeId(),
    FullName:"Rana Saleh",
    Departement:"Development",
    level:"Junior",
    imageURL: "path/to/rana.jpg",
    Salary:calculateSalary("Junior"),
    
}
let Hadi={
    EmployeeId:generateEmployeeId(),
    FullName:"Hadi Ahmad",
    Departement:"Finance",
    level:"Mid-Senior",
    imageURL: "path/to/hadi.jpg",
    Salary:calculateSalary("Midsenior"),
    
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
let employees = [Ghazi, Lana, Tamara, Safi, omar, Rana, Hadi];
function renderEmployees() {
    let employeeList = "";
    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];
      employeeList += "Employee name: " + employee.FullName + "<br>";
      employeeList += "Employee salary: " + employee.Salary + "<br><br>";
    }
    document.getElementById("employee-list").innerHTML = employeeList;
  }
  
  renderEmployees();
  






