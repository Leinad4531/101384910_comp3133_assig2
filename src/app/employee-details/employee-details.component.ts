import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  employee = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    salary: '',
  };

  constructor() { }

  ngOnInit() { }

  
  onSubmit() {

    
  }
}
