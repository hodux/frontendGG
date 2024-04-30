import { useState } from "react";

function SignIn() {
    const [inputValueEmail, setInputValueEmail] = useState("");
    const [inputValuePassword, setInputValuePassword] = useState("");

    const handleInputChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
    }

    const handleInputChangePassword = (event) => {
        setInputValuePassword(event.target.value);
    }

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!sessionStorage.getItem('usernameOrEmail'));

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Set the usernameOrEmail value in sessionStorage
        sessionStorage.setItem('usernameOrEmail', inputValueEmail);
        if (isUserLoggedIn){
            window.location.replace("http://localhost:3333/profile");
        }
        // You can add more logic here, like submitting the form data to a server
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container rounded-top rounded-bottom mt-5">
                <p className='mt-2'>Sign In</p>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address or pwd</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={inputValueEmail} onChange={handleInputChangeEmail}/>
                </div>
                <div className='emailError'></div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={inputValuePassword} onChange={handleInputChangePassword}/>
                </div>

                <div className='passwordError'></div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>

                <br/>
                <div className="signup mt-2">
                    <div>No account? <a className="signup" href="/signUp"> Sign up</a></div>
                </div>
                <br/>
                <div className="signup mt-2">
                    <div>Forgot password? <a className="reset" href="/resetPassword">Reset password</a></div>
                </div>
            </form>
        </>
    );
}

export default SignIn;
