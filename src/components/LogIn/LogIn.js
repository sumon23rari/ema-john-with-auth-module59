import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css';
import auth from '../../firebase.Init';
const LogIn = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [signInWithEmailAndPassword,user, error]=useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword=e=>{
        setPassword(e.target.value);
    }
    if (user) {
        navigate(from,{replace:true})
    }
    const handleSignIn=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
           <div>
           <h3 className='form-title'>this is Logins</h3> 
          <form action="" onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email </label>
                <input onBlur={handleEmail} type="email" name="email" id="" required/>
           </div>
           <div className="input-group">
            <label htmlFor="password">Password </label>
                <input onBlur={handlePassword} type="password" name="password" id="" required/>
           </div>
           <input className='form-submit' type="submit" value="LogIn" />
           <p style={{color:'red'}}>{error?.message}</p>
          </form>
          <p>New to Ema-John?<Link className='form-link' to='/signup'>create an account</Link></p>
           </div>

        </div>
    );
};

export default LogIn;