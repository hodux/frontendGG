package com.example.backend.repositories;

import com.example.backend.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecetteRepository extends JpaRepository<Recipe, Integer> {
}
