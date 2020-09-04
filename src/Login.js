import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


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
            <div className="login__container">
                <h1>Login</h1>
            </div>
            <div className="login__text">
                <h1>Logging in..</h1>
            </div>

            <Button  onClick={signIn}>Google sign in</Button>
        </div>
    );
}

export default Login;
