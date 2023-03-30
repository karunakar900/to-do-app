import React, { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleemail = (e) => {
        setemail(e.target.value);
    }

    const handlepassword = (e) => {
        setpassword(e.target.value);
    }

    const handlelogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/login", {
            method: "post",
            crossDomain: true,
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                "Access-control-Allow-origin": "*",
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "userloggined");
            })

        alert("login success");

    }
    return (
        <div>
            <form onSubmit={handlelogin}>
                <label>
                    Email:
                    <input type="text" id="a" value={email} onChange={handleemail} />
                </label>
                <br></br>
                <label>
                    password:
                    <input type="password" value={password} onChange={handlepassword} />
                </label>
                <br></br>
                <button type="submit">Login</button>
                <Link to="/register"><button id="btn">signup</button></Link>
            </form>
        </div>
    )
}
export default Login;