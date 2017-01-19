package com.se.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.se.auth.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}
