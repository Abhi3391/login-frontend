import React from 'react';
import { Link } from 'react-router-dom';


const Header=()=>{
    return(
        <div className="navbar">
            <h1>Demo Page</h1>
            <Link to="/login"><button>login</button></Link>
            <Link to="/signup"><button>signup</button></Link>
            
        </div>
    );
}

export default Header;