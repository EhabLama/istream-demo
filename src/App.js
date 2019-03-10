import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "./components/LoginComponent.jsx"
import Dashboard from "./layouts/Dashboard.jsx"
import './styles/App.less';


const BasicRouter = () => (
  <Router>
    <div>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Login}/>
    <Route path="/home" component={Dashboard} />
    </div>
  </Router>
);






export default BasicRouter;