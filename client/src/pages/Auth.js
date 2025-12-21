import React from 'react'
import { useState } from 'react'
import axios from "axios";
import {useCookies} from "react-cookie";
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  return (
    <div>
        <Login />
        <Register />
    </div>
  )
}

export default Auth

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate();

    const onSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/users/login", {username, password});
            console.log(response.data);
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");

        }
        catch(err){
            console.log(err);
        }

    }
    return(
        <div>
            <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/users/register", {username, password});
            alert("Registration completed! Now login")
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
            <h2>Register</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
        </div>
    )
}