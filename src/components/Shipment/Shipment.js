import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.Init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
   
      const handleName = e => {
        setName(e.target.value);
      }
      const handleAddress=e=>{
        setAddress(e.target.value)
      }
      const handlePNumber=e=>{
        setPhone(e.target.value)
      }
      const hadleShipment=e=>{
        e.preventDefault()
      }
    return (
        <div className='form-container'>
        <div>
          <h3 className='form-title'>this is shipping page</h3>
          <form onSubmit={hadleShipment}>
          <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input onBlur={handleName} type="text" name="name" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your email </label>
              <input value={user && user.email} type="email" name="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="address">Your Address</label>
              <input onBlur={handleAddress} type="text" name="address" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="address">Your Number</label>
              <input onBlur={handlePNumber} type="number" name="number" id="" required />
            </div>
            <input className='form-submit' type="submit" value="Add Shipping" />
          </form>
        </div>
  
      </div>
    );
};

export default Shipment;