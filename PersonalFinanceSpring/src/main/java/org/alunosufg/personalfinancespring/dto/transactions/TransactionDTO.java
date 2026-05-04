package org.alunosufg.personalfinancespring.dto.transactions;

import java.util.Date;

public record TransactionDTO(Integer value, Date date, String category)  {
}
