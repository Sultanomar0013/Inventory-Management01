import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) { 
        navigate('/home');
        const data = await response.json();
        console.log(data);
        const token = data.token;
        localStorage.setItem('token', token);
      } else {
        console.log("error happens")
        
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  return (
    <div className="signin-background">
      <div className= "signin">
      <h1 className="headtitle2">Sign In</h1>
      <form>
        <div>
          <label className= "inputtitle">Email:</label>
          <input
            className= "inputfield1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className= "inputtitle">Password:</label>
          <input
            className= "inputfield1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className= "buttonSignin" type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default SignIn;
