import React, { useState , useEffect } from "react";
import "./SignUp.css";
import { assets } from "../../Assets/assets";

export default function SignUp({ setShowSignUp }) {
  const [CurrTitle, setCurrTitle] = useState("Sign Up");

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="signup">
      <form className="signup-container">
        <div className="signup-title">
          <h2>{CurrTitle}</h2>
          <img onClick={() => setShowSignUp(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className="signup-inputs">
          {CurrTitle==="Login"?<></>:<input type="text" placeholder="Name" required/>}
          <input type="tel" placeholder="Phone Number" required/>
          <input type="password" placeholder="Password" required/>
        </div>
        <button>Let's Go!</button>
        {CurrTitle==="Login"?<></>:<div className="signup-terms"> <input type="checkbox" required/><p>By continuing, I agree to the terms of use & privacy policy</p></div>
        }
        {CurrTitle==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrTitle("Sign Up")} >Create Account</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrTitle("Login")} >Login</span></p>
        }
      </form>
    </div>
  );
}
