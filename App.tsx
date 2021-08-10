
import "./src/components/Home/home.css";
import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./src/components/Home/home";

import Details from "./src/components/Details/details";
import NotFound from "./src/pages/not-found";
import About from "./src/components/About/about";



function App() {
        return (
            <Router>
                <div className="App">
                   <header>
                       <nav>
                           <ul>
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
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route
                            path="/details/:cardID"
                            render={({ match }) => {
                                const { cardID } = match.params;
                                return <Details cardID={cardID} />;
                            }}
                        />
                    </Switch>
                </div>
            </Router>


        );
}

export default App;