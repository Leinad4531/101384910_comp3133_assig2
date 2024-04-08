import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees: any[] = [];
 

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (response: any) => { 
        this.employees = response.data.employees;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
}
 