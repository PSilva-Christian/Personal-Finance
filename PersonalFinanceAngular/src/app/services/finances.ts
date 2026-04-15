import { HttpClient } from '@angular/common/http';
import { Enviroment } from './../../enviroment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Finances {

  transactionURL = Enviroment.apiURL + "user";

  constructor(private http : HttpClient){}

  addNewTransaction(transaction: TransactionDTO){
    return this.http.post<TransactionDTO>(this.transactionURL + "/transaction", transaction).subscribe({
      complete: () => console.log("Transaction successfuly"),
      error: (err) => console.log("Transaction failed")
    })
  }
}
