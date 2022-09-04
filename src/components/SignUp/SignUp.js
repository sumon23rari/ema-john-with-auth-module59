import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.Init';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
  const handleEmail = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  const handleConPassword = e => {
    console.log(e.target.value);
    setConPassword(e.target.value);
  }
  if (user) {
    navigate('/shop');
  }
  const handlecreateUser = e => {
    e.preventDefault();
    if (password !== conPassword) {
      setError('your two password did not match')
      return;
    }
    if (password.length < 6) {
      setError('enter your password minimum 6 chartear')
      return;
    }
    createUserWithEmailAndPassword(email,password)
  }
  return (
    <div className='form-container'>
      <div>
        <h3 className='form-title'>Sign-Up</h3>
        <form onSubmit={handlecreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email </label>
            <input onBlur={handleEmail} type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password </label>
            <input onBlur={handlePassword} type="password" name="password" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="Confirm-password">Confirm-Password </label>
            <input onBlur={handleConPassword} type="password" name="Confirm-password" id="" required />
          </div>
          <p style={{ color: 'red' }}>{error}</p>
          <input className='form-submit' type="submit" value="sign-up" />
        </form>
        <p>Already have an account?<Link className='form-link' to='/login'>login</Link></p>
      </div>

    </div>
  );
};

export default SignUp;