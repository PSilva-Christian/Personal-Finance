import { HttpClient } from '@angular/common/http';
import { Enviroment } from './../../enviroment';
import { Injectable } from '@angular/core';
import { getLastTransactionDTO } from '../models/transactions-dto/getTransactionDTO';
import { UserGenericDTO } from '../models/user-generic-dto';
import { DashboardFinancesDTO } from '../models/transactions-dto/dashboard-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Finances {

  transactionURL = Enviroment.apiURL + "user";

  constructor(private http : HttpClient){}

  addNewTransaction(transaction: TransactionDTO){
    return this.http.post<TransactionDTO>(this.transactionURL + "/transaction", transaction).subscribe({
      complete: () => console.log("Transaction successfuly"),
      error: (err) => console.log("Transaction failed",err)
    })
  }

  getLastTransactionsByQtd(qtd: number, user: UserGenericDTO){
    return this.http.post<getLastTransactionDTO[]>(this.transactionURL + "/transactions/" + qtd, user);
  }

  getAllTransactions(user: UserGenericDTO){
    return this.http.post<getLastTransactionDTO[]>(this.transactionURL + "/transactions", user )
  }
}
