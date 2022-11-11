package com.example.toolslabassignment.repositories;

import com.example.toolslabassignment.entities.Admin;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin, Long> {
}
