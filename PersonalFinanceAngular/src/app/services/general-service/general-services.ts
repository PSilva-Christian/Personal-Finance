import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GeneralServices {

  constructor(private router: Router){}

  public logoutUser(){
    sessionStorage.clear();
    this.router.navigate(['login']);
    return;
  }
}
