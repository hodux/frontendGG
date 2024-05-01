import "../css/profile.css";

function Profile() {
    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">edogaru@mail.com.my</span>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-4">
                                    <label className="labels">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" value="" />
                                </div>
                                <div className="col-md-4">
                                    <label className="labels">Last Name</label>
                                    <input type="text" className="form-control" value="" placeholder="Last Name" />
                                </div>
                                <div className="col-md-4">
                                    <label className="labels">Email</label>
                                    <input type="text" className="form-control" placeholder="Email" value="" />
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
