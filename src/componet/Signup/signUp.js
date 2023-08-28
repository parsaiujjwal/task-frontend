import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/user/signUp", {confirmPassword: confirmPassword,referralCode: referralCode,email: email,password: password,firstName: firstName,lastName: lastName,
            });
            if (response.data.status) {
                alert("Signup done");
                navigate("/signIn")
                
            }

            localStorage.setItem("user", JSON.stringify(response.data.user));
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="bg-primary">
            <div className="container bg-primary d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4">
                    <h2 className="mb-4 text-center">Sign Up</h2>
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="firstName" className="form-label">First Name:</label>
                                <input type="text"className="form-control"id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="lastName" className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="referralCode" className="form-label">Referral Code:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="referralCode"
                                    placeholder="Referral Code"
                                    value={referralCode}
                                    onChange={(e) => setReferralCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
                    </form>
                    <p className="mt-3 text-center">
                        Already have an account? <Link to="/signin">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
