import { useState } from "react";
import axios from "axios";

function SignIn() {
    const [inputValueEmail, setInputValueEmail] = useState("");
    const [inputValuePassword, setInputValuePassword] = useState("");

    const handleInputChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
    }

    const handleInputChangePassword = (event) => {
        setInputValuePassword(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:7373/checkuser/${inputValueEmail}/${inputValuePassword}`)
            .then((response) => {
                if (response.data) {
                    sessionStorage.setItem('usernameOrEmail', inputValueEmail);
                    window.location.reload();
                    window.location.href = "/profile";
                } else {
                    console.log("not found");
                }
            });
    }

    return (
        <div className="mt-4 container border-0">
            <div className="card">
                <div className='card-header'>
                    <h3>Sign In:</h3>
                </div>
                <div className='card-header bg-white'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email ou nom d'utilisateur</label>
                            <input type="text" className="form-control" name="email" value={inputValueEmail} onChange={handleInputChangeEmail}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" name="password" value={inputValuePassword} onChange={handleInputChangePassword}/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Connexion</button>
                    </form>
                </div>
                <div className='card-footer'>
                    <div className="signup mt-2">
                        <div>Pas de compe? <a className="signup" href="/signUp"> Créer un compte</a></div>
                    </div>
                    <div className="signup mt-2">
                        <div>Mot de passe oublié? <a className="reset" href="/resetPassword">Réinitialiser le mot de passe</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
