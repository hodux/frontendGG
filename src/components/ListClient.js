import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClientList() {
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({
        idUser: '',
        first_name: '',
        last_name: '',
        username: '',
        passwd: '',
        email: ''
    });

    const getAllUsers = () => {
        axios.get("http://localhost:7373/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deleteUserById = (idUser) => {
        axios.delete(`http://localhost:7373/users/delete/${idUser}`)
            .then(() => {
                setUsers(users.filter(user => user.idUser !== idUser));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const updateClientById = (idUser) => {
        axios.put(`http://localhost:7373/users/update/${idUser}`, updatedUser)
            .then(() => {
                setUsers(users.map(user => {
                    if (user.idUser === idUser) {
                        return { ...user, ...updatedUser };
                    }
                    return user;
                }));
                setEditingUserId(null);
                setUpdatedUser({
                    idUser: '',
                    first_name: '',
                    last_name: '',
                    username: '',
                    passwd: '',
                    email: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const setEditUser = (user) => {
        setEditingUserId(user.idUser);
        setUpdatedUser(user);
    }

    const cancelEdit = () => {
        setEditingUserId(null);
        setUpdatedUser({
            idUser: '',
            first_name: '',
            last_name: '',
            username: '',
            passwd: '',
            email: ''
        });
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="container border-0 mt-3">
            <h2 className="mt-5 mb-4">Client List</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Username</th>
                        <th>Pwd</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.idUser}>
                            <td>{user.idUser}</td>
                            <td>{editingUserId === user.idUser ?
                                <input type="text" name="first_name" value={updatedUser.first_name}
                                       onChange={handleInputChange} className="form-control" /> :
                                user.first_name}</td>
                            <td>{editingUserId === user.idUser ?
                                <input type="text" name="last_name" value={updatedUser.last_name}
                                       onChange={handleInputChange} className="form-control" /> :
                                user.last_name}</td>
                            <td>{editingUserId === user.idUser ?
                                <input type="text" name="username" value={updatedUser.username}
                                       onChange={handleInputChange} className="form-control" /> :
                                user.username}</td>
                            <td>{editingUserId === user.idUser ?
                                <input type="text" name="passwd" value={updatedUser.passwd}
                                       onChange={handleInputChange} className="form-control" /> :
                                user.passwd}</td>
                            <td>{editingUserId === user.idUser ?
                                <input type="text" name="email" value={updatedUser.email}
                                       onChange={handleInputChange} className="form-control" /> :
                                user.email}</td>

                            <td>
                                {editingUserId === user.idUser ? (
                                    <>
                                        <button onClick={() => updateClientById(user.idUser)}
                                                className="btn btn-success m-1">Save
                                        </button>
                                        <button onClick={cancelEdit} className="btn btn-danger m-1">Cancel</button>
                                    </>
                                ) : (
                                    <button className="btn btn-primary m-1" onClick={() => setEditUser(user)}>Edit</button>
                                )}
                                <button className="btn btn-danger m-1" onClick={() => deleteUserById(user.idUser)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClientList;
