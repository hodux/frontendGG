import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateClient() {

    const [client, setClient] = useState({
        first_name:"",
        last_name:"",
        username:"",
        passwd:"",
        email:""
    })

    // Always the same
    const handleChange = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})
    }

    const navigate = useNavigate();
    const submitNewClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7373/crc", client)
            .then((res) =>{
                console.log("Client added");
                navigate("/listClts")
            }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <div className="mt-5 container border-0">
            <div className="card">
                <div className='card-header'>
                    Connexion:
                </div>
                <div className='card-body'>

                    <form method="post" onSubmit={(e) => submitNewClient(e)}>
                        <div className="mb-3">
                            <label className="form-label">Prénom</label>
                            <input type="text"
                                   className="form-control"
                                   name="first_name"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.first_name}

                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nom</label>
                            <input type="text"
                                   className="form-control"
                                   name="last_name"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.last_name}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nom d'utilisateur</label>
                            <input type="text"
                                   className="form-control"
                                   name="username"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.username}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mot de passe</label>
                            <input type="text"
                                   className="form-control"
                                   name="passwd"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.passwd}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text"
                                   className="form-control"
                                   name="email"
                                   required
                                   onChange={(e) => handleChange(e)}
                                   value={client.email}

                            />
                        </div>
                        <button
                            className="btn btn-primary mt-3">
                            Add Client
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateClient
