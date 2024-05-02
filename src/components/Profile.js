import "../css/profile.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username:"",
        email: ""
    });

    useEffect(() => {
        const userLogin= (sessionStorage.getItem('usernameOrEmail'));
        getUser(userLogin);
    }, []);

    const getUser = (userLogin) => {
        axios.get(`http://localhost:7373/findUserByEmailOrUsername/${userLogin}`)
            .then((res) => {
                console.log(res.data); // Update this line
                setUser({
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    username: res.data.username,
                    email: res.data.email
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">{user.username}</span>
                            <span className="text-black-50">{user.email}</span>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Information privée</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-4">
                                    <label className="labels">Prénom</label>
                                    <input type="text" className="form-control" placeholder="First Name" value={user.first_name} disabled={true}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="labels">Nom</label>
                                    <input type="text" className="form-control" placeholder="Last Name" value={user.last_name} disabled={true}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="labels">Email</label>
                                    <input type="text" className="form-control" placeholder="Email" value={user.email} disabled={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
