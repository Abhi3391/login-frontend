import { useState , useEffect } from 'react';
import {Link} from 'react-router-dom'

const Login =()=>{
    let [loginemail,setLogInName]=useState(null);

   
    

    function initiate(e)
    {
        e.preventDefault();
        let email=document.querySelector("#email").value;
        let password=document.querySelector("#password").value; 
        setLogInName(email);
        console.log(loginemail)
        console.log(email)
        console.log(password)
        
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={initiate}>
                <label htmlFor="email">Email: </label>  
                <input type="text" name="email" id="email"/><br/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password"/><br/>

                <button type="submit">Log in</button>

                <Link to="/signup">
                <button type="submit">Sign up</button>
                </Link>

                <Link to="/forgotpassword">
                <a href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjGl7KV2_aDAxXOoGMGHdk0Ba0QPAgJ'>Forgot Password</a>
                </Link>
            </form>
        </div>
    );
}
export default Login;