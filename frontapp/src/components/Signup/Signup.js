import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import "./Signup.css";
import validator from 'validator'
function Signup() {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[conpassword,setconpassword]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={email,name,password,username}
    if(email.length===0||password.length===0||name.length===0||username.length===0){
      alert("Enter All fields")
    }
    else if (!validator.isEmail(email)) {
      alert('Enter Valid Email!')
    } 
    else if(password!==conpassword){
      alert("Password And Confirm Password Must be same!")
    }
    else{
    fetch("http://localhost:8080/signup/post",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      nav("/")
    })
  }
}
  return (
    <div id="signup_body">
    <div className="signup-form">
      <div className="signup_container">
        <div className="signup_header">
          <Typography variant="h4" className="signup_account">
            Create an Account
          </Typography>
          <Typography variant="body1" className="signup_free">
            Get started for free!
          </Typography>
        </div>
        <form className="signup_form">
          <div className="sign_input">
            <TextField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              className="sign_name"
              variant="outlined"
            />
          </div>
          <div className="sign_input">
            <TextField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="sign_username"
              variant="outlined"
            />
          </div>
          <div className="sign_input">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              className="sign_email"
              variant="outlined"
            />
          </div>
          <div className="sign_input">
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="sign_password"
              variant="outlined"
            />
          </div>
          <div className="sign_input">
            <TextField
              label="Confirm Password"
              type="password"
              value={conpassword}
              onChange={(e) => setconpassword(e.target.value)}
              placeholder="Confirm Password"
              className="sign_con"
              variant="outlined"
            />
          </div>
          <Button onClick={senddb} className="sign-btn" variant="contained" color="primary">
            SIGN UP
          </Button>
        </form>
        <Link to="/">
          <Typography variant="body2" className="log_btn">
            Already have an account? Sign in
          </Typography>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Signup;