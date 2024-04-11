import { useState } from "react";

function SignIn() {
    const [inputValueEmail, setInputValueEmail] = useState("");

    const handleInputChangeEmail = (event) => {
        setInputValueEmail(event.target.value)
    }

    const [inputValuePassword, setInputValuePassword] = useState("");

    const handleInputChangePassword = (event) => {
        setInputValuePassword(event.target.value)
    }
    return (
        <>
            <form class="container rounded-top rounded-bottom mt-5">

                <form>
                    <p className='mt-2'>Sign In</p>
                </form>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={inputValueEmail} onChange={handleInputChangeEmail}/>
                </div>
                <div className='emailError'></div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={inputValuePassword} onChange={handleInputChangePassword}/>
                </div>

                <div className='passwordError'></div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                <br/>
                <div className="signup mt-2">
                    <div>No account? <a class="signup" href="/signUp"> Sign up</a></div>
                </div>
                <br/>
                <div className="signup mt-2">
                    <div>Forgot password? <a class="reset" href="/resetPassword">Reset password</a></div>
                </div>

            </form>

        </>
    );
}

export default SignIn;