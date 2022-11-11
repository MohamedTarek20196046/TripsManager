package com.example.toolslabassignment.repositories;



import com.example.toolslabassignment.entities.Station;
import org.springframework.data.jpa.repository.JpaRepository;

public interface stationRepo extends JpaRepository<Station , Long> {
}