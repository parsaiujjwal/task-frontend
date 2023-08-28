import axios from "axios";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/user/signIn", { email: email, password: password });
            if (response.data.status) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("token", JSON.stringify(response.data.token));
                alert("Sign in done");
                navigate("/bord");

            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="bg-primary">
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
                <h2 className="mb-4 text-center">Sign In</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p className="mt-3 text-center">
                    Don't have an account? <Link to="/">Sign Up</Link>
                </p>
            </div>
        </div>
        </div>
    );
}
export default SignIn;
