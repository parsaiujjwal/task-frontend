import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashbord.css"
import { Link } from "react-router-dom";
const Dashboard = () => {
    const [referralUsers, setReferralUsers] = useState([]);

    const userData = JSON.parse(localStorage.getItem('user'));
    let id = userData._id;
    let referralCode = userData.referralCode

    useEffect(() => {
        async function fetchData() {
            try {
                const referralUsersResponse = await axios.post("http://localhost:3000/user/count", { id: id });
                setReferralUsers(referralUsersResponse.data.user);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="maindiv vh-100">
            <span className="top " >Back-To-SignUp</span> <Link to="/">Sign Out</Link><span style={{ marginLeft: "100px", color: "white", fontSize: "20px" }}>You Are ReferralCode : <span style={{ color: "crimson" }}>{referralCode}</span></span>
            <div className="container py-5">
                <h1 className="text-center innertext1">Dashboard</h1>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Total User Count: <span className="innertext"> {referralUsers.length}</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Total Referral Bonus: {userData.tokenBalance}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">

                                <h2 className="card-title">Referral Users List:</h2>
                                <ul>
                                    {referralUsers.map((user, index) => (
                                        <li key={index}>{user.firstName} {user.lastName}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
