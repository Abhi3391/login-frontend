const Signup =()=>{

    function initiate(e)
    {
        e.preventDefault();
        let username=document.querySelector("#name").value;
        let email=document.querySelector("#email").value;
        let password1=document.querySelector("#password1").value; 
        let password2=document.querySelector("#password2").value; 
        console.log(email)
        console.log(username)
        console.log(password1)
        console.log(password2)
        
    }

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={initiate}>
                <label htmlFor="name">Name </label>  
                <input type="text" name="name" id="name"/><br/>

                <label htmlFor="email">Email: </label>  
                <input type="email" name="email" id="email"/><br/>

                <label htmlFor="dob">Date of birth: </label>  
                <input type="date" name="dob" id="dob"/><br/>

                <label htmlFor="gender">Gender: </label>  
                <label htmlFor="gender">Male </label>  
                <input type="radio" name="gender" id="gender"/><br/>

                <label htmlFor="gender">Female </label>  
                <input type="radio" name="gender" id="/gender"/><br/>

                <label htmlFor="password1">Password: </label>
                <input type="password" name="password1" id="password1"/><br/>

                <label htmlFor="password2">Confirm Password: </label>
                <input type="password" name="password2" id="password2"/><br/>

                <button type="submit">Log in</button>
            </form>
        </div>
    );
}
export default Signup;