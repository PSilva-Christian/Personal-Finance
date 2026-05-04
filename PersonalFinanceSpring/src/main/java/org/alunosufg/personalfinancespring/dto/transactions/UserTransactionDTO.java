package org.alunosufg.personalfinancespring.dto.transactions;

public record UserTransactionDTO(String email, Integer value, String category, String description) {
}
