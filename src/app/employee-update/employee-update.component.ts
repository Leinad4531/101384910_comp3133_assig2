import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css'
})
export class EmployeeUpdateComponent {
  employee = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    salary: '',
  };

  constructor() { }

  ngOnInit() { }

  
 update() {}
}
