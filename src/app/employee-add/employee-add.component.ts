import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  employee = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    salary: '',
  };

  submitted = false;
  addEmployeeSuccess = false;

  constructor(private employeeService : EmployeeService, private router :  Router) { }

  ngOnInit() { }

  
  create() {

    this.submitted = true;
    if (this.isValidForm()) {
      this.employeeService.addEmployee(this.employee.first_name, this.employee.last_name, this.employee.email, this.employee.gender, this.employee.salary)
        .subscribe(
          response => {
            // Handle successful registration
            console.log('Employee added successfully:', response);
            this.addEmployeeSuccess = true;
            setTimeout(() => this.router.navigate(['/employees']), 1500);
          },
          error => {
            // Handle registration failure
            console.error('Employee add failed:', error);
            this.addEmployeeSuccess = false;
          }
        );
    }
    
  }

  isValidForm(): boolean {
    return !!this.employee.first_name && !!this.employee.last_name && !!this.employee.email && !!this.employee.gender && !!this.employee.salary;
  }
}
