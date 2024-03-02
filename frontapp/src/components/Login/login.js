import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { TextField, Button, Typography } from '@mui/material';
import "./login.css"

function Login() {
  const nav=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/login/get")
    .then((response) => response.json())
    .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  const authenticate=(e)=>{
    e.preventDefault();
  const usercheck = user.find(user => (user.username === username && user.password === password));
 if(username.length===0){
  alert("Enter Username")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  else if(!usercheck){
    alert("Wrong Username or Password!")
  }
  else {
    nav("/home")
  }
}
  return (
    <div id="login_body">
    <div className="login-form">
      <div className="login_container">
        <div className="login_header">
          <Typography variant="h4" className="log_title">
            Watch Vault
          </Typography>
          <Typography variant="body1" className="log_cred">
            Enter Credentials For Login
          </Typography>
        </div>

        <form className="log_form">
          <div className="form_input">
            <TextField
              label="Username"
              className="login_name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              variant="outlined"
            />
          </div>
          <div className="form_input">
            <TextField
              label="Password"
              className="login_password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              variant="outlined"
            />
          </div>
          <Button onClick={authenticate} className="signup-btn" variant="contained" color="primary">
            LOGIN
          </Button>
        </form>
        <Link to="/register">
          <Typography variant="body2" className="registerbtn">
            No Account? Signup Now!
          </Typography>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Login;