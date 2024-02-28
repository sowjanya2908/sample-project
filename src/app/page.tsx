'use client'
import React, { useState } from 'react';
 
 
const YourComponent = () => {
  const [name, setname] = useState('');
  const [nameerror, setnameerror] = useState('');
  const [addresserror ,setaddreserror ]= useState('');
  const [emailerror ,setemailerror]= useState(''); 
  const [phoneerror,setphoneerror]= useState('');
  const namechange = (e: any) => {
    const value = e?.target?.value
    setname(value);
    if (value === '') {
      setnameerror("name is required")
    } else {
      setnameerror('');
    }
  };
  const Addresschange =(e:any)=>{
    const value=e.target.value
    if (value ===''){
      setaddreserror("Address is Required");
    }else {
      setaddreserror('');
    }
 
  }
 const emailchange = (e:any)=>{
  const value=e.target.value
  if (value===''){
    setemailerror("Email is Reauired")
  }else{ 
    setemailerror('');
  }}
 const phonechange = (e:any)=>{
  const value=e.target.value
  if (value===''){
    setphoneerror("Phone is Required")
  }else {
    setphoneerror('');
  }
 } 
 return (
    <div className='center-container'>
      <form>
        <h1>create user page's</h1>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className={`form-control ${nameerror ? 'border-danger' : ''}`}
            id="exampleFormControlInput1"
            placeholder="Enter name"
            onChange={namechange}
            onBlur={namechange}
            value={name}
          />
        </div>
        {nameerror && (
          <div style={{ color: '#dc3545' }}>{nameerror}</div>
        )}
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input type="text"
            className={`form-control ${addresserror ?'border-danger':''}`}
            id="exampleFormControlInput1"
            placeholder="address"
            onChange={Addresschange}
            onBlur={Addresschange}
          />
        </div>
       {addresserror &&(
          <div style={{ color: '#dc3545' }}>{addresserror}</div>
       )}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={emailchange}/>
       {emailerror && (
        <div style={{color:'#dc3545'}}>{emailerror}</div>
       )}
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" onChange={phonechange} />
        {phoneerror &&(
          <div style={{color:'#dc3545'}}>{phoneerror}</div>  
                )}
      </form>
    </div>
  );
};
 
export default YourComponent;
 
