import React from 'react'
import { Head } from 'react-static'

import '../styles/Signup.scss';

export default () => (
  <React.Fragment>
    <Head>
      <title>Sign Up</title>
    </Head>
    <div className="container">
      <div className="login">
        <h1 className="login__heading"> Sign Up
          <small className="login__subheading">
            Create an account and start collecting links today.
          </small>
        </h1>
        <form className="login-form">
          <div className="login-form__group">
            <label className="login-form__label">Email</label>
            <input
              className="login-form__input" type="email" 
              placeholder="you@example.com" spellCheck="false" 
            />
          </div>
          <div className="login-form__group">
            <label className="login-form__label">Password</label>
            <input 
              className="login-form__input" type="password" 
              placeholder="Enter your password" spellCheck="false"
            />
          </div>
          <div className="signup-actions">
            <button className="signup-form__button" type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  </React.Fragment>
)
