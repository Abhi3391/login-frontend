import { useState  } from 'react';
import {Link} from 'react-router-dom'
import React from 'react';
import axios from 'axios'


const Login =()=>{
    const [logInEmail,setLogInEmail]=useState(null);
    const [logInPassword,setLogInPassword]=useState(null);

   
    

    function initiate(e)
    {
        e.preventDefault();
        axios.post("http://localhost:3001/login",{logInEmail,logInPassword})
        .then(result=> console.log(result))
        .catch(err=>console.log(err))
        
        
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={initiate}>
                <label htmlFor="email">Email: </label>  
                <input type="email" name="email" id="email" onChange={(e)=>setLogInEmail(e.target.value)}/><br/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={(e)=>setLogInPassword(e.target.value)}/><br/>

                <button type="submit">Log in</button>

                <Link to="/signup">
                <button type="submit">Sign up</button>
                </Link>

                <Link to="/forgotpassword">
                Forgot Password
                </Link>
            </form>
        </div>
    );
}
export default Login;