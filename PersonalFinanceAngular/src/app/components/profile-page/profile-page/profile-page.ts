import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordDTO } from '../../../models/auth-dto/change-password-dto';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {

  changePasswordForm = new FormGroup({
    email : new FormControl(sessionStorage.getItem('email')),
    password : new FormControl("", [Validators.required, Validators.nullValidator, Validators.minLength(8)]),
    password2 : new FormControl("", [Validators.required, Validators.nullValidator, Validators.minLength(8)]),
    newPassword : new FormControl("", [Validators.required, Validators.nullValidator, Validators.minLength(8)])
  });

  userNewPassword?: ChangePasswordDTO;

  constructor(private router: Router){}

  public username = sessionStorage.getItem('username')
  public email = sessionStorage.getItem('email')

  public navigateToUpdates(){
    return this.router.navigate(['finances'])
  }

  public navigateToProfile(){
    return this.router.navigate(['profile']);
  }

  public navigateToDashboard(){
    return this.router.navigate(['dashboard']);
  }

  public changeUserPassword(){
    this.userNewPassword = this.changePasswordForm.value as ChangePasswordDTO;
    alert(this.userNewPassword.email + this.userNewPassword.password + this.userNewPassword.password2 + this.userNewPassword.newPassword);
  }
}
