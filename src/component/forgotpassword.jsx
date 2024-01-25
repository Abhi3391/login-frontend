import {Link} from 'react-router-dom'

const Forgotpassword =()=>{

    function initiate(e)
    {
        e.preventDefault();
        let username=document.querySelector("#email").value;
        // let password=document.querySelector("#password").value; 
        console.log(username)
        // console.log(password)
        
    }

    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <form onSubmit={initiate}>

                <label htmlFor="email">Email: </label>  
                <input type="text" name="email" id="email"/><br/>
                
                
                <button type="submit">Submit</button>

               
            </form>
        </div>
    );
}
export default Forgotpassword    ;