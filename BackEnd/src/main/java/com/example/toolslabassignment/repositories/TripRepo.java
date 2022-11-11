package com.example.toolslabassignment.repositories;

import com.example.toolslabassignment.entities.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepo extends JpaRepository<Trip, Long> {
}
