package org.alunosufg.personalfinancespring.controller;
import jakarta.validation.Valid;
import org.alunosufg.personalfinancespring.dto.TransactionDTO;
import org.alunosufg.personalfinancespring.dto.UserGenericDTO;
import org.alunosufg.personalfinancespring.dto.UserTransactionDTO;
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
    public String saveNewTransaction(@Valid @RequestBody UserTransactionDTO newTransaction) {

        if (newTransaction == null)
            return null;

        return transactionService.saveTransaction(newTransaction);
    }

    @GetMapping("/transactions")
    public List<TransactionDTO> getTransaction(@Valid @RequestBody UserGenericDTO user) {
        return transactionService.getAllTransactions(user);

    }

    @PostMapping("/transactions/{qtd}")
    public List<TransactionDTO> lastTransactions(@Valid @RequestBody UserGenericDTO user, @PathVariable Integer qtd){
        return transactionService.getLastQtdTransactions(user, qtd);
    }

}
