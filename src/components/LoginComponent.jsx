import React from "react";
import {Link} from "react-router-dom";

export default class HomeComponent extends React.PureComponent{

     //TRANSITIN ANIMATION:
     
    // componentDidMount(){
    //     $(".login-page").addClass("ng-enter");
    //     setTimeout(function(){
    //       $(".login-page").addClass("ng-enter-active");
    //     }, 300);
    //     setTimeout(function(){
    //       $(".login-page").removeClass("ng-enter");
    //       $(".login-page").removeClass("ng-enter-active");
    //     }, 600);
    //   }

    render (){
        return (
        <div className="login">
        <div className="login-page ng-scope ui-view"> 
        <div className="row"> 
        <div className="col-md-6 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src="/ilogo2.gif" className="company-logo" alt = "istream logo"/> 
            <form className="ng-pristine ng-valid"> 
              <div className="form-content"> 
                <div className="form-group"> 
                  <input type="text" className="form-control input-underline input-lg" placeholder="Email" /> 
                </div> 
                <div className="form-group"> 
                  <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
                </div> 
              </div> 
              <Link to="/home/application">
              <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button></Link>
            </form> 
          </div> 
        </div> 
      </div>
    </div>
    
  ); 
}}

