import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateClient() {
    const [client, setClient] = useState({
        first_name: "",
        last_name: "",
        username: "",
        passwd: "",
        confirmPasswd: "", // Add confirmation field
        email: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!client.first_name) {
            errors.first_name = "Prénom est requis";
        }
        if (!client.last_name) {
            errors.last_name = "Nom est requis";
        }
        if (!client.username) {
            errors.username = "Nom d'utilisateur est requis";
        }
        if (!client.passwd) {
            errors.passwd = "Mot de passe est requis";
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(client.passwd)) {
            errors.passwd = "Entrer un mot de passe valide s'il vous plait! Au moins 8 caractères, Contient au moins un chiffre (0-9), Contient au moins une lettre minuscule (a-z), Contient au moins une lettre majuscule (A-Z)";
        }
        if (!client.confirmPasswd) {
            errors.confirmPasswd = "Confirmer le mot de passe est requis";
        } else if (client.confirmPasswd !== client.passwd) {
            errors.confirmPasswd = "Les mots de passe ne correspondent pas";
        }
        if (!client.email) {
            errors.email = "Email est requis";
        } else if (!/^\S+@\S+\.\S+$/.test(client.email)) {
            errors.email = "Email invalide";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitNewClient = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.get(`http://localhost:7373/checkemail/${client.email}`)
                .then((emailResponse) => {
                    if (emailResponse.data) {
                        setErrors({...errors, email: "Email déjà utilisé"});
                    } else {
                        axios.get(`http://localhost:7373/checkusername/${client.username}`)
                            .then((usernameResponse) => {
                                if (usernameResponse.data) {
                                    setErrors({...errors, username: "Nom d'utilisateur déjà utilisé", email:""});
                                } else {
                                    axios.post("http://localhost:7373/addUser", client)
                                        .then((res) => {
                                            console.log("Client ajouté");
                                            navigate("/signIn");
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };



    return (
        <div className="mt-4 container border-0">
            <div className="card">
                <div className='card-header'>
                    <h3>Création de compte:</h3>

                </div>
                <div className='card-header bg-white'>
                    <form onSubmit={submitNewClient}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   name="email"
                                   onChange={handleChange}
                                   value={client.email}/>
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Prénom</label>
                            <input type="text"
                                   className="form-control"
                                   name="first_name"
                                   onChange={handleChange}
                                   value={client.first_name}/>
                            {errors.first_name && <div className="text-danger">{errors.first_name}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nom</label>
                            <input type="text"
                                   className="form-control"
                                   name="last_name"
                                   onChange={handleChange}
                                   value={client.last_name}/>
                            {errors.last_name && <div className="text-danger">{errors.last_name}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nom d'utilisateur</label>
                            <input type="text"
                                   className="form-control"
                                   name="username"
                                   onChange={handleChange}
                                   value={client.username}/>
                            {errors.username && <div className="text-danger">{errors.username}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mot de passe</label>
                            <input type="password"
                                   className="form-control"
                                   name="passwd"
                                   onChange={handleChange}
                                   value={client.passwd}/>
                            {errors.passwd && <div className="text-danger">{errors.passwd}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmer le mot de passe</label>
                            <input type="password"
                                   className="form-control"
                                   name="confirmPasswd"
                                   onChange={handleChange}
                                   value={client.confirmPasswd}/>
                            {errors.confirmPasswd && <div className="text-danger">{errors.confirmPasswd}</div>}
                        </div>
                        <button className="btn btn-primary mt-3">Créer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateClient;