import { CurrencyPipe } from '@angular/common';
import { DashboardUserDTO } from '../../models/auth-dto/dashboard-user-dto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServices } from '../../services/general-service/general-services';
import { DashboardFinancesDTO } from '../../models/transactions-dto/dashboard-dto';

@Component({
  selector: 'app-dashboard-page',
  imports: [CurrencyPipe],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  userDasboard: DashboardUserDTO | any;
  username = sessionStorage.getItem("username")
  totalMonthly?: DashboardFinancesDTO;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private router : Router, private generalS: GeneralServices) {}

  public navigateToUpdates(){
    return this.router.navigate(['finances'])
  }

  public navigateToProfile(){
    return this.router.navigate(['profile']);
  }

  public logoutUser(){
    return this.generalS.logoutUser();
  }


}
