import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    if (sessionUser) return (
      <Redirect to="/" />
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }
  const demoSubmit = async(e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({
      credential: 'visiting@ghost.com',
      password: 'password'
    }))

  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-or-signup-title">
        <label>
          Log in or <Link className="signup-btn-in-login-form"to="signup">Sign up</Link>
        </label>
      </div>

      <label className="welcome-line">
          Welcome to Nightmarebnb
      </label>

      <input className="login-input"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
        placeholder="  Email"
        />

      <input className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="  Password"
        />
      <button className="login-btn" type="submit">Log In</button>
      <br/>
      <button className="login-btn" onClick={demoSubmit}>Demo Log In</button>

      <ul style={{listStyle: "none"}}>
        {errors.map((error, idx) => <li className="error-msg" key={idx}>{error}</li>)}
      </ul>

    </form>
  );
}

export default LoginFormPage;
