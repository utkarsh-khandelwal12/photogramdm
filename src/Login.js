import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { Instagram } from '@material-ui/icons';


function Login() {

    const[{},dispatch]=useStateValue();
    
    const signIn=()=>{
            auth.signInWithPopup(provider)
            .then((result)=>{
                dispatch({
                    type:actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error)=>alert(error.message))
    };
    
    return (
        <div className="login">
            <Instagram/>
            <h1>Login in through Google</h1>
            <div className="login__container">
                
                <Button  onClick={signIn}>Google sign in</Button>
            </div>
        </div>
    );
}

export default Login;
