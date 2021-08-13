import './src/components/Home/home.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './src/components/Home/Home.tsx';

import Details from './src/components/Details/Details.tsx';
import NotFound from './src/pages/Not-found.tsx';
import About from './src/components/About/about.tsx';
import { Article } from './types.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav>
            <ul className="ul">
              <li className="list">
                <Link className="link" to="/">Home</Link>
              </li>
              <li className="list">
                <Link className="link" to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route
            path="/details/:id"
          >
            <Details />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
