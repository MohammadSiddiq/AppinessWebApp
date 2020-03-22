import React from 'react';

import classes from './User.css';

const user = ( props ) => {
   
    console.log(props);
    return (
        <div className={classes.User}>
            <p>Name: {props.name}</p>
            <p>Gender: <strong> {props.gender}</strong></p>
            <p>Email: <strong> {props.email}</strong></p>
            <p>Phone: <strong> {props.phone}</strong></p>
            
        </div>
    );
};

export default user;