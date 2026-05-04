package org.alunosufg.personalfinancespring.dto.error;

public record ErrorResponseDTO(
        String message,
        int status,
        long timestamp
) {}