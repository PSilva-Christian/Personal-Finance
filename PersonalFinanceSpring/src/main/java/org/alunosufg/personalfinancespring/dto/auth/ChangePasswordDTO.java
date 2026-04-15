package org.alunosufg.personalfinancespring.dto.auth;

public record ChangePasswordDTO(String email, String password, String newPassword) {
}
