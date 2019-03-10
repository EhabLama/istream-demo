import React from "react";
import { Link } from "react-router-dom";

//const $ = window.$;

export default class HomeComponent extends React.PureComponent{

	 //TRANSITIN ANIMATION:

	// componentDidMount(){
		
	// 		$(".overview-page").addClass("ng-enter");
	// 		setTimeout(function(){
	// 			$(".overview-page").addClass("ng-enter-active");
	// 		}, 300);
	// 		setTimeout(function(){
	// 			$(".overview-page").removeClass("ng-enter");
	// 			$(".overview-page").removeClass("ng-enter-active");
	// 		}, 600);
	// 	}
	

	render(){
	    return (
			<div className="overview">
				<div className="overview-page ui-view main" key="overview"> 
                <Link to="/home/application" className="pull-right btn btn-primary btn-outline btn-rounded">Application</Link>
			        <h2>Overview <small>Reprehenderit sunt reprehenderit ipsum ex pariatur duis proident sit pariatur enim.</small></h2> 
			        <div className="jumbotron"> 
						<h1>Welcome!</h1> Qui reprehenderit adipisicing irure ex fugiat ipsum exercitation nostrud nulla incididunt dolore officia.
						<br /><br /> 
						<p> <a href="?" className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
			        </div> 
			    </div>
			</div>
		);
	}
};