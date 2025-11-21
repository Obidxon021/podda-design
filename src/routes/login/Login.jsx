import { useState } from 'react';
import './Login.css';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { NavLink } from 'react-router';

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='login_wrapper'>
      <div className="container">
        <div className="logo"><NavLink to="/">LOGO</NavLink></div>

        <div className="tabs">
          <button
            className={activeTab === 'login' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('login')}
          >
            LOGIN
          </button>
          <button
            className={activeTab === 'signup' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('signup')}
          >
            SIGN UP
          </button>
          <div className={`tab-indicator ${activeTab === 'signup' ? 'right' : ''}`}></div>
        </div>

        <div className="form-container">
          {activeTab === 'login' ? (
            <>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="icon"><Mail/></span>
                  <input type="email" placeholder="Please Enter your Email" />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="icon"> <Lock/> </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Please Enter your Password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff/> : <Eye/>}
                  </button>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
            </>
          ) : (
            <>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="icon"><Mail/></span>
                  <input type="email" placeholder="Please Enter your Email" />
                </div>
              </div>

              <div className="input-group">
                <label>Name</label>
                <div className="input-wrapper">
                  <span className="icon"><User/></span>
                  <input type="text" placeholder="Please Enter your Name" />
                </div>
              </div>

              <div className="input-group">
                <label>Create Password</label>
                <div className="input-wrapper">
                  <span className="icon"><Lock/></span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Please Create your Password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff/> : <Eye/>}
                  </button>
                </div>
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <span className="icon"><Lock/></span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Please Confirm your Password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff/> : <Eye/>}
                  </button>
                </div>
              </div>
            </>
          )}

          <button className="submit-btn">
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </button>

          <div className="contact">Contact Us</div>
        </div>
      </div>
    </div>
  );
}