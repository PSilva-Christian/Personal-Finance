import { UserLoginDTO } from './../../models/user-login-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequestDTO } from '../../models/user-request';

@Injectable({
  providedIn: 'root',
})
export class LoginUser {

  loginURL = import.meta.env.LOGIN_USER_URL;

  constructor(private http: HttpClient){}

  userLoggedDetails?: UserRequestDTO;

  siginUser(user: UserLoginDTO){

    this.http.post<UserRequestDTO>(this.loginURL, user).subscribe({
      next: (next) => this.userLoggedDetails = next as UserRequestDTO,
      error: (err) => alert("Login unsuccesfull"+ err)
    });

      alert("Email: " + this.userLoggedDetails?.email);
      alert("Token : " + this.userLoggedDetails?.token);


  }


}
