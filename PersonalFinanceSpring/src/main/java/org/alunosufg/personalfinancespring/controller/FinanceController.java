package org.alunosufg.personalfinancespring.controller;
import jakarta.validation.Valid;
import org.alunosufg.personalfinancespring.dto.UserGenericDTO;
import org.alunosufg.personalfinancespring.dto.UserTransactionDTO;
import org.alunosufg.personalfinancespring.entities.Transaction;
import org.alunosufg.personalfinancespring.services.TransactionServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class FinanceController {

    private final TransactionServices transactionService;

    public FinanceController(TransactionServices transactionServices) {
        this.transactionService = transactionServices;
    }

    @PostMapping("/transaction")
    public String saveNewTransaction(@Valid @RequestBody UserTransactionDTO creditTransaction) {

        if (creditTransaction == null)
            return null;

        return transactionService.saveTransaction(creditTransaction);
    }

    @GetMapping("/transactions")
    public List<Transaction> getTransaction(@Valid @RequestBody UserGenericDTO user) {
        return transactionService.getTransactions(user);

    }

}
