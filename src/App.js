import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import login from './login';
import App1 from './App1';
const BasicExample = () => (
    <Router>
        <Route path="/login" component={login} />
        <Route path="/home" component={App1} />
    </Router>
);


export default BasicExample;