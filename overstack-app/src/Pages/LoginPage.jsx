import React, { useState } from "react";
import "./LoginPage.css";
import  axios from "axios";
const LoginPage = () => {
  const [semail,setSemail] = useState('');
  const [spass,setSpass] = useState("");
  const [scpass,setScpass] = useState('');
  const [lpass,setLpass] = useState('');
  const [lemail,setLemail] = useState('');
  const handleSignin = ()=>{
    if(lpass && lemail){
      axios.post("https://reqres.in/api/login",{
        email:lemail,
        password:lpass
      }).then((res)=>{console.log(res)}).catch((er)=>console.log(er));
    }
  }
  return (
    <div className="signup_signin">
      <div className="signup_one">
        <h3>Create Account</h3>
        <div className="signup_two">
          <div className="signup_two1">
          <label>Email Address*</label> <br />
          <input type="mail" placeholder="Email" value={semail} onChange={(e)=>setSemail(e.target.value)} required />
          <div className="signup_three">
            <div className="signup_four">
              <label>Create Password*</label><br />
              <input type="password" placeholder="Password" value={spass} onChange={(e)=>setSpass(e.target.value)} required />
            </div>
            <div className="signup_five">
              <label>Confirm Password*</label><br />
              <input type="password" placeholder="Confirm Password" value={scpass} onChange={(e)=>setScpass(e.target.value)} required />
            </div>
            </div>
          </div>
          <div className="signup_six">
            <input type="checkbox" />
            <p>
              Sign up for today for exclusive offers from Overstock.com
              delivered right to your inbox**
            </p>
          </div>
          <button>Create Account</button>
        </div>
        <div className="signup_seven">
        <button>Continue as Guest</button>
        <p>By creating an account or continuing as a Guest,<br /> you agree to <u>Terms & Conditions</u> and <br /> <u>Pribacy Policy</u></p>
        <p><u>Terms & Conditions</u> | <u>Privacy Policy</u>**You can <br /> unsuscribe at any time</p>
        </div>
      </div>
      <div className="signin_login">
        <h3>Sign In</h3>
        <div className="signin_one">
          <label>Email Address*</label><br />
          <input type="mail" placeholder="Email" value={lemail} onChange={(e)=>setLemail(e.target.value)} required /><br />
          <label>Password*</label><br />
          <input type="password" placeholder="Password" value={lpass} onChange={(e)=>setLpass(e.target.value)} required />
          <button onClick={handleSignin} >Sign In</button>
          <a href="">
            <p><u>Forgot your password?</u></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
