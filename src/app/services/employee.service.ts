import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/graphql'; 

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    const query = `
      query {
        employees {
          _id
          first_name
          last_name
          email
          gender
          salary
        }
      }
    `;

    return this.httpClient.post(this.apiUrl, { query });
  }

  addEmployee(first_name: string, last_name: string, email: string, gender: string ,salary: string) {
    // ... build the GraphQL query and send POST request with HttpClient
    const query = `
      mutation {
        createEmployee(first_name: "${first_name}", last_name: "${last_name}", email: "${email}", gender: "${gender}" ,salary: "${salary}") {
          first_name
          last_name
          email
          gender
          salary
        } 
      }
    `;

    return this.httpClient.post<any>('http://localhost:3000/graphql', { query });
  }

  updateEmployee(id: string, input: any) {
    const mutation = `
      mutation {
        updateEmployee(id: "${id}", input: ${JSON.stringify(input)}) {
          first_name
          last_name
          email
          gender
          salary
        }
      }
    `;

    return this.httpClient.post<any>(this.apiUrl, { query: mutation });
  }

  deleteEmployee(id: string) {
    const mutation = `
      mutation {
        deleteEmployee(id: "${id}")
      }
    `;

    return this.httpClient.post<any>(this.apiUrl, { query: mutation });
  }
  
}
