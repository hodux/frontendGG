package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Recipe {

    @Id
    private int recipe_ID;
    private String recipe_name;
    private Integer calories;
    private Boolean isVegan;
    private Boolean isVegetarian;
    private String descriptions;
    private String ingredients;
    private String instructions;
    private String img;
    private String preparationTime;

}
