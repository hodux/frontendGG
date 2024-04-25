package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Users {

    @Id
    private int idUser;
    private String first_name;
    private String last_name;
    private String username;
    private String passwd;
    private String email;

}