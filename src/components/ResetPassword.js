import { useState } from "react";

function ResetPassword() {

    const [inputValueEmail, setInputValueEmail] = useState("");

    const handleInputChangeEmail = (event) => {
        setInputValueEmail(event.target.value)
    }

    return (
        
        <>
            <form class="container rounded-top rounded-bottom mt-5">

                <form>
                    <p className='mt-2'>Reset password</p>
                </form>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={inputValueEmail} onChange={handleInputChangeEmail}/>
                </div>
                
                <div className='passwordError'></div>
                <button type="submit" class="btn btn-primary mt-3   ">Submit</button>

            </form>
        </>
    );

}

export default ResetPassword; 