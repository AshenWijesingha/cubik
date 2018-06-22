import React from 'react'
import { Router, Link, Route, Switch } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import CubikApp from './components/CubikApp';

import './app.scss'

const App = () => (
  <Router>
    <Switch>
      <Route path="/app" component={CubikApp} />
      <React.Fragment>
        <div className="nav container">
          <Link exact to="/" className="logo">Cubik</Link>
          <nav className="nav__items">
            <Link className="nav__item" to="/about">About</Link>
            <Link className="nav__item" to="/blog">Blog</Link>
            <Link className="nav__item" to="/app">Login</Link>
            <Link className="nav__item" to="/blog">Signup</Link>
          </nav>
        </div>
        <div className="content">
          <Routes />
        </div>
        <div className="footer container">
          <Link to="/about">About</Link>
          <a href="https://twitter.com/SatoshiJS" target="_blank">Twitter</a>
        </div>
      </React.Fragment>
    </Switch>
  </Router>
);

export default hot(module)(App)
