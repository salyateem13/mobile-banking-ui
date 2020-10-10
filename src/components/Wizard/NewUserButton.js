import React from 'react';
import {Link} from 'react-router-dom';

const NewUserButton = props => {
  return <Link to = "/signup" onClick={props.newUser}>New Users Click Here</Link>
}

export default NewUserButton