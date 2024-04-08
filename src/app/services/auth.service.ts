import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  signup(username: string, email: string, password: string) {
    // ... build the GraphQL query and send POST request with HttpClient
    const query = `
      mutation {
        signup(username: "${username}", email: "${email}", password: "${password}") {
          username
          email
          password
        }
      }
    `;

    return this.httpClient.post<any>('http://localhost:3000/graphql', { query });
  }

  login(email: string, password: string) {
    const query = `
      query {
        login(email: "${email}", password: "${password}") {
          token
          user {
            email
          }
        }
      }
    `;

    return this.httpClient.post<any>('http://localhost:3000/graphql', { query });
  }
}
