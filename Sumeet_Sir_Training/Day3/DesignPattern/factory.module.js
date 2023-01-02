class Permanent {
    salary = 200000;
  }
  
  class Contractor {
    salary = 300000;
  }
  
  class Freelancer {
    hourlyCharges = 10000;
  }
  
  export class EmployeeFactory {
    emp;
    createEmployee(type) {
      switch (type) {
        case "permanent":
          this.emp = new Permanent();
          break;
  
        case "contractor":
          this.emp = new Contractor();
          break;
  
        case "freelancer":
          this.emp = new Freelancer();
          break;
        default:
          console.log("Employee type does not exist !");
          break;
      }
      return this.emp;
    }
  }
  