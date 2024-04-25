package com.example.backend.controller;

import com.example.backend.model.Recipe;
import com.example.backend.model.Users;
import com.example.backend.repositories.RecetteRepository;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3333")
public class AppController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RecetteRepository recetteRepository;

    @PostMapping("/crc")
    public Users user(@RequestBody Users users) {
        userRepository.save(users);
        return users;
    }

    @GetMapping("/bob")
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/checkemail/{email}")
    public boolean checkEmailExists(@PathVariable("email") String email) {
        return userRepository.existsByEmail(email);
    }

    @GetMapping("/checkusername/{username}")
    public boolean checkUsernameExists(@PathVariable("username") String username) {
        return userRepository.existsByUsername(username);
    }

    @GetMapping("/getrec")
    public List<Recipe> getAllRecette() {
        return recetteRepository.findAll();
    }

    @PostMapping("/postrec")
    public Recipe recette(@RequestBody Recipe recipe) {
        recetteRepository.save(recipe);
        return recipe;
    }

    @DeleteMapping("/bob/delete/{id}")
    public boolean deleteClientById(@PathVariable("id") int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @PutMapping("/bob/update/{id}")
    public Users updateClientById(@PathVariable("id") int id, @RequestBody Users updatedClient) {
        Users users = userRepository.findById(id).orElse(null);

        users.setFirst_name(updatedClient.getFirst_name());
        users.setLast_name(updatedClient.getLast_name());
        users.setUsername(updatedClient.getUsername());
        users.setPasswd(updatedClient.getPasswd());
        users.setEmail(updatedClient.getEmail());
        userRepository.save(users);

        return users;
    }

    @DeleteMapping("/getrec/delete/{id}")
    public boolean deleteRecetteById(@PathVariable("id") int id) {
        if (recetteRepository.existsById(id)) {
            recetteRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @PutMapping("/getrec/update/{id}")
    public Recipe updateRecetteById(@PathVariable("id") int id, @RequestBody Recipe updatedRecipe) {
        Recipe recipe = recetteRepository.findById(id).orElse(null);

        recipe.setRecipe_name(updatedRecipe.getRecipe_name());
        recipe.setCalories(updatedRecipe.getCalories());
        recipe.setDescriptions(updatedRecipe.getDescriptions());
        recipe.setIngredients(updatedRecipe.getIngredients());
        recipe.setIsVegan(updatedRecipe.getIsVegan());
        recipe.setIsVegetarian(updatedRecipe.getIsVegetarian());
        recipe.setInstructions(updatedRecipe.getInstructions());
        recipe.setImg(updatedRecipe.getImg());
        recipe.setPreparationTime(updatedRecipe.getPreparationTime());
        recetteRepository.save(recipe);

        return recipe;
    }
}