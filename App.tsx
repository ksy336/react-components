import './src/components/Home/home.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './src/components/Home/Home.tsx';

import Details from './src/components/Details/Details.tsx';
import NotFound from './src/pages/Not-found.tsx';
import About from './src/components/About/about.tsx';

const App: React.FC = (): JSX.Element => {
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
  ];
  return (
    <TransitionGroup>
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
          { routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                  in={match !== null}
                >
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route
              path="/details/:title"
              render={({ match }) => {
                const { title } = match.params;
                return <Details title={title} />;
              }}
            />
            <Route path="">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </TransitionGroup>
  );
};
export default App;
