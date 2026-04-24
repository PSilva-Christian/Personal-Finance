import { Finances } from './../../services/finances';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { getLastTransactionDTO } from '../../models/transactions-dto/getTransactionDTO';
import { UserGenericDTO } from '../../models/user-generic-dto';
import { GeneralServices } from '../../services/general-service/general-services';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-finance-form',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './finance-form.html',
  styleUrls: ['./finance-form.css']
})

export class FinanceForm implements OnInit{

  constructor(private transaction : Finances,
     private router : Router,
     private cdr: ChangeDetectorRef,
     private generalS: GeneralServices
    ){}

  categories = ['Food', 'Transport', 'Leisure', 'Health', 'Housing', 'Others'];

  financeForm = new FormGroup ({
    description: new FormControl(''),
    value: new FormControl( 0, [Validators.required, Validators.nullValidator, Validators.min(1)]),
    category: new FormControl('', [Validators.required, Validators.nullValidator]),
    type: new FormControl('expense', Validators.required)
    }
  )

  qtdTransactionsMenu = 3;

  ngOnInit(){
    this.getLastTransactions(this.qtdTransactionsMenu);
  }

  transactionsDisplayed? : getLastTransactionDTO[];


  public addTransaction(){

    const financeAdd = this.financeForm.value as TransactionDTO;
    financeAdd.email = sessionStorage.getItem('email') ?? '';
    financeAdd.value = financeAdd.value * 100;

    if (this.financeForm.value.type === 'expense')
      financeAdd.value *= -1;

    this.financeForm.reset();

    this.financeForm.setValue({
            description: '',
            value: 0,
            category: '',
            type: 'expense'
    });

    this.getLastTransactions(this.qtdTransactionsMenu);

    return this.transaction.addNewTransaction(financeAdd);

  }

  public setTransactionType(type: 'income' | 'expense') {
      this.financeForm.patchValue({ type: type });
    }

   public backToDashboard(){
    this.router.navigate(['/dashboard'])
  }

  public profilePage(){
    this.router.navigate(['profile']);
  }

  public getLastTransactions(qtd: number){
    const user: UserGenericDTO = ({
      email: sessionStorage.getItem('email') ?? '',
      username: sessionStorage.getItem('username') ?? '',

      }
    )
    this.transaction.getLastTransactionsByQtd(qtd, user).subscribe({
      next: (nxt) => {this.transactionsDisplayed = nxt,
            this.cdr.detectChanges();

      },
      error: (err) => console.log("Error while getting trasactions", err)
    });
  }

  public logoutUser(){
    return this.generalS.logoutUser();
  }

}
