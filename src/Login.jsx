import React, { useState } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            alert("Login berhasil");
            navigate("/Home");
        } else {
            alert("Login gagal");
        }
    };
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>
                    <div class="greetings">
                        <span>L</span>
                        <span>O</span>
                        <span>G</span>
                        <span>I</span>
                        <span>N</span>
                        <span>!</span>
                    </div></h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </div>
        </div >
    );
};
export default Login;