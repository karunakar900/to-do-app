import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signin.css';
const Signup = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const handleemail = (e) => {
        setemail(e.target.value)
    };

    const handlepassword = (e) => {
        setpassword(e.target.value)
    };


    const handleconfirmpassword = (e) => {
        setconfirmpassword(e.target.value)
    };

    const handlesignup = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/register", {
            method: "post",
            crossDomain: true,
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                "Access-control-Allow-origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
                confirmpassword
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "userregister");
            });

        alert("register success");




    }
    return (
        <div>
            <form onSubmit={handlesignup}>
                <h5>Register</h5>
                <label>
                    Email:
                    <br></br>
                    <input type="text" value={email} onChange={handleemail} />
                </label>
                <br></br>
                <label>
                    password:
                    <br></br>
                    <input type="password" value={password} onChange={handlepassword} />
                </label>
                <br></br>
                <label>
                    confirmpassword:
                    <br></br>
                    <input type="password" value={confirmpassword} onChange={handleconfirmpassword} />
                </label>
                <br></br>
                <button type="submit">Register</button>
                <Link to="/"><button id="btn2">login</button></Link>
            </form>
        </div>
    );
}

export default Signup;