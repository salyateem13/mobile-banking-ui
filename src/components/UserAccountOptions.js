import React from 'react';
import {Link} from 'react-router-dom';

const UserAccountOptions = (props) => {
   
    return ( 

    <div>
        <Link   to='/login'>Login</Link> 
        <Link to='/signup'>Sign Up</Link> 
    </div>
    )

  
}

export default UserAccountOptions