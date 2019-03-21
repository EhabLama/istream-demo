import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Overview from "../components/OverviewComponent"
import Application from "../components/ApplicationComponent.jsx"

//const $ = window.$;

//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const routes = [
    {
      path: "/home/overview",
      main: () => <Overview/>
    },
    {
      path: "/home/application",
      main: () => <Application/>
    }
  ];

export default class Dashboard extends React.PureComponent{


  //TRANSITIN ANIMATION:

  // componentDidMount(){
    
  //     $(".dashboard-page").addClass("ng-enter");
  //     setTimeout(function(){
  //       $(".dashboard-page").addClass("ng-enter-active");
  //     }, 300);
  //     setTimeout(function(){
  //       $(".dashboard-page").removeClass("ng-enter");
  //       $(".dashboard-page").removeClass("ng-enter-active");
        
  //     }, 600);
  //   }
  


  
  render() {
    // const { pathname } = this.props.location;
    return (
        <Router>

      <div className="dashboard">
        <div className="dashboard-page ui-view"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand">iStream 360<br /></h2>
                  <img src="/user-icon.png" className="user-avatar" alt="user avatar"/>
                  <br /> 
                  <a href="/login" className="btn btn-white btn-outline btn-rounded btn-sm">Logout</a> 
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                     <Link to="/home/application">Connectors</Link>
                  </li>
                  <li>
                     <Link to="/home/application">Access control</Link>
                  </li>
                  <li>
                     <Link to="/home/application">ETL</Link>
                  </li>
                  <li>
                     <Link to="/home/application">Anonymization</Link>
                  </li>
                  <li>
                     <Link to="/home/application">Dashboards</Link>
                  </li>
                  <li>
                     <Link to="/home/application">Configurations</Link>
                  </li>
                </ul> 
              </div>
             
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">
                {React.cloneElement(<div id="body-container" className="ui-view">{this.props.content}</div> || <div />)}
                {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}   
                    exact={route.exact}
                    component={route.main}
                />
                ))}
              </div>
            </div> 
          </div> 
        </div>
      </div>
      </Router>
    );
  }
};