import { useState  } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import React from 'react';
import axios from 'axios'


const Login = ()=>{
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const navigate = useNavigate();

    const initiate = async(e)=>
    {
        e.preventDefault();

        console.log(email);
        const response = await axios.post("http://localhost:3001/login",{email,password})
        if(response.data === "email matched"){
            navigate("/");
        }else{
            console.log("Invalid Login")
        }
    //     .then(result=> {

    //         history("/");
    //         console.log("result",result)
    //     })
    //     .catch(err=>console.log(err))  
    // }
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={initiate}>
                <label htmlFor="email">Email: </label>  
                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/><br/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/><br/>

                <button type="submit">Log in</button>

                <Link to="/signup">
                <button >Sign up</button>
                </Link>

                <Link to="/forgotPassword">
                Forgot Password
                </Link>
            </form>
        </div>
    );
}

export default Login;