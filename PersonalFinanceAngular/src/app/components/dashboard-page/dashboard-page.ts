import { Finances } from './../../services/finances';
import { UserGenericDTO } from './../../models/user-generic-dto';
import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardFinancesDTO } from '../../models/transactions-dto/dashboard-dto';
import { AsideComponent } from "../aside-component/aside-component/aside-component";
import { getLastTransactionDTO } from '../../models/transactions-dto/getTransactionDTO';

@Component({
  selector: 'app-dashboard-page',
  imports: [CurrencyPipe, AsideComponent],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {

  totalMonthly?: DashboardFinancesDTO = ({
    incomes: 0,
    expenses: 0
  });
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  userCredentials: UserGenericDTO = ({
  email: sessionStorage.getItem("email") ?? '',
    username: sessionStorage.getItem("username") ?? ''
  })

  constructor(private finance: Finances, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.getAllTransactionsDashboard()
  }


  getAllTransactionsDashboard() {
  this.finance.getAllTransactions(this.userCredentials).subscribe({
    next: (nxt: getLastTransactionDTO[]) => {

      if(this.totalMonthly){

        for (let v of nxt) {
        if (v.value < 0)
          this.totalMonthly.expenses += v.value;

        else
          this.totalMonthly.incomes += v.value;

        }
      }

      console.log("Incomes: " + this.totalMonthly?.incomes)
      console.log("Expenses: " + this.totalMonthly?.expenses)
      this.cdr.detectChanges();
    },
    error: (err) => console.error("Error getting the transactions", err)
  });
}


}
