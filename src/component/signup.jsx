import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [dob, setDOB] = useState(null);
    const [gender, setGender] = useState(null);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);
    const navigate =useNavigate();

    function initiate(e) {
        e.preventDefault();
        const password = password1;


         if (password1 === password2) {
            axios.post("http://localhost:3001/signup", { name, email, dob, gender, password })
                .then(result => {
                    navigate('/login');
                    console.log("result", result)
                })
                .catch(err => {
                    alert("email exits")
                    console.log("err", err)
                })
        }
        else alert("password not match")
    }

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={initiate}>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} /><br />

                <label htmlFor="signEmail">Email: </label>
                <input type="email" name="signEmail" id="signEmail" onChange={(e) => setEmail(e.target.value)} /><br />

                <label htmlFor="dob">Date of birth: </label>
                <input type="date" name="dob" id="dob" onChange={(e) => setDOB(e.target.value)} /><br />

                <label htmlFor="gender">Gender: </label>
                <label htmlFor="gender">Male </label>
                <input type="radio" name="gender" id="gender" onChange={(e) => setGender(e.target.value)} /><br />

                <label htmlFor="gender">Female </label>
                <input type="radio" name="gender" id="/gender" onChange={(e) => setGender(e.target.value)} /><br />

                <label htmlFor="password1">Password: </label>
                <input type="password" name="password1" id="password1" onChange={(e) => setPassword1(e.target.value)} /><br />

                <label htmlFor="password2">Confirm Password: </label>
                <input type="password" name="password2" id="password2" onChange={(e) => setPassword2(e.target.value)} /><br />

                <button type="submit">Log in</button>
            </form>
        </div>
    );
}
export default Signup;