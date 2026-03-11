import { UserRequestDTO } from './../../models/user-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegisterDTO } from '../../models/user-register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterUser {
  registerUserURL = import.meta.env.REGISTER_USER_URL;

  constructor(private http: HttpClient, private router: Router) {}

  registerNewUser(user: UserRegisterDTO): any {

    this.http.post<UserRequestDTO>(this.registerUserURL, user).subscribe({
      next: () => alert("Success user registration "),
      error: (err) => console.error("Error, registration failed "+ err)
    }
    );

    return this.router.navigate(["/login"]);

  }
}


