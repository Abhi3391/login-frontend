// import {Link} from 'react-router-dom'
import { useState} from 'react';
import React from 'react';



const ForgotPassword =()=>{

    const [name,setName]=useState(null);

    function initiate(e)
    {
        e.preventDefault();
        console.log(name)
        
        
    }

    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <form onSubmit={initiate}>

                <label htmlFor="email">Email: </label>  
                <input type="email" name="email" id="email" onChange={(e)=>setName(e.target.value)}/><br/>
                
                
                <button type="submit">Submit</button>

               
            </form>
        </div>
    );
}
export default ForgotPassword;