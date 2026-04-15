import { Finances } from './../../services/finances';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-form',
  imports: [ReactiveFormsModule],
  templateUrl: './finance-form.html',
  styleUrls: ['./finance-form.css']
})

export class FinanceForm {

  constructor(private transaction : Finances, private router : Router){}

  categories = ['Food', 'Transport', 'Leisure', 'Health', 'Housing', 'Others'];

  financeForm = new FormGroup ({
    description: new FormControl(''),
    value: new FormControl( 0, [Validators.required, Validators.nullValidator, Validators.min(1)]),
    category: new FormControl('', [Validators.required, Validators.nullValidator]),
    type: new FormControl('expense', Validators.required)
    /*,
    date: new FormControl('', [Validators.required, Validators.nullValidator])*/
    }
  )
  addTransaction() {

    const financeAdd = this.financeForm.value as TransactionDTO;
    financeAdd.email = sessionStorage.getItem('email') ?? '';
    financeAdd.value = financeAdd.value * 100;

    this.financeForm.setValue({
         description: '',
         value: 0,
         category: '',
         type: 'expense'/*,
         date: ''*/
    });


  }

  setTransactionType(type: 'income' | 'expense') {
      this.financeForm.patchValue({ type: type });
    }

    backToDashboard(){
    this.router.navigate(['/dashboard'])
    }
}
