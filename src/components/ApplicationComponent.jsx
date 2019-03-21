import React from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { fileFormat, dataType, anonType } from "../data/dropdown-data"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

//const $ = window.$;




export default class ApplicationComponent extends React.PureComponent {
	state =
		{
			page: 0,
			isVisible: false
		}


	NextButtonHandler = () => {
		this.setState(prevState => ({ page: this.state.page + 1 }))

		if (this.state.page >= 2) {
			this.setState({ page: 0 })
			this.setState(oldState => ({ isVisible: false }));
		}

	}


	createNotification = (type) => {
		return () => {
			
			switch (type) {
				case 'info':
					NotificationManager.info('Info message');
					break;
				case 'success':
					NotificationManager.success('Anonymization completed', 'Success');
					break;
				case 'warning':
					NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
					break;
				case 'error':
					NotificationManager.error('Error message', 'Click me!', 5000, () => {
						alert('callback');
					});
					break;
				default: 
					return null
			}
			this.setState(oldState => ({ isVisible: true }));

		};
	};




	//TRANSITIN ANIMATION:

	//  componentDidMount(){
	//  	$(".dropdown-menu li a").click(function(){
	// 	$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
	// 	$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
	// 	});

	// 	$(".dropdown-menu 2 li a").click(function(){
	// 		$(this).parents(".dropdown 2").find('.btn 2').html($(this).text() + ' <span class="caret"></span>');
	// 		$(this).parents(".dropdown 2").find('.btn').val($(this).data('value'));
	// 		});


	// 	$(".reports-page").addClass("ng-enter");
	// 	setTimeout(function(){
	// 		$(".reports-page").addClass("ng-enter-active");
	// 	}, 300);
	// 	setTimeout(function(){
	// 		$(".reports-page").removeClass("ng-enter");
	// 		$(".reports-page").removeClass("ng-enter-active");
	// 	}, 600);


	//  }


	render() {

		let jsxpage = null;

		const { page } = this.state

		if (page === 0) {
			jsxpage =
				<>
					<div className="jumbotron">
						<hr style={{ height: 1, visibility: 'hidden' }} />
						<h3 style={{ marginBottom: 30 }}>Enter your data type and source:</h3>
						<form >
							<div className="form-group row">
								<div className="col-sm-2" >
									<label className="col-form-label" >
										File Format:
									</label>
								</div>
								<div className="col-sm-4">
									<Select
										options={fileFormat}
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2">
									<label style={{ minWidth: 50 }}>Srouce Link Address:</label>
								</div>
								<div className="col-sm-4">
									<input className="form-control" placeholder="Enter link address" />
								</div>
							</div>
						</form>
						<div className="next-col">
							<button className="btn next-button dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.NextButtonHandler}>Next</button>
						</div>

					</div>
				</>
		}


		if (page === 1) {
			jsxpage =
				<>
					<div className="jumbotron">
						<h3 style={{ marginBottom: 30 }}>Choose your data settings:</h3>
						<form >
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										XDRID
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										bigint
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										XDRTYPE
								</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										int
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										SessionStartTime
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										varchar(255)
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										SessionEndTime
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										varchar(255)
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										Status
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										int
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										ErrorCode
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										int
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										ClientAdress
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										varchar(255)
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										ServerAdress
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										varchar(255)
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										UniversalAppIndex
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										varchar(255)
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										VirtualType
									</h5>
								</div>
								<div className="col-sm-2" >
									<h5 className="col-form-text" >
										varchar(255)
									</h5>
								</div>
								<div className="col-sm-2 anon-box" >
									<Select options={anonType} />
								</div>
							</div>
							<br/>
									<div className="viewmore-col">
										<button className="btn viewmore-button dropdown-toggle" type="button" data-toggle="dropdown">View more &#9662;</button>
									</div>
						</form>
						<div className="next-col">
							<button className="btn next-button dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.NextButtonHandler}>Next</button>
						</div>
					</div>
				</>
		}

		if (page === 2) {
			jsxpage =
				<>
					<div className="jumbotron">
						<h3 style={{ marginBottom: 30 }}>Enter destination Address:</h3>
						<form >
							<div className="form-group row">
								<div className="col-sm-2" >
									<label className="col-form-label" >
										File Format:
									</label>
								</div>
								<div className="col-sm-4" >
									<Select options={fileFormat} />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-2">
									<label style={{ minWidth: 50 }}>Destination Link Address:</label>
								</div>
								<div className="col-sm-4">
									<input className="form-control" placeholder="Enter link address" />
								</div>
							</div>
						</form>
						<div className="next-col">
							<button className="btn finish-button dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.createNotification('success')}>Create Record</button>
							<NotificationContainer />
							{this.state.isVisible && (
							<button className="btn next-button2 dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.NextButtonHandler}>Finish</button>
							)}
						</div>
					</div>
				</>
		}

		return (


			<div className="reports">
				<div key="reports" className="reports-page ui-view main">
					<div className="ng-scope">
						<Link to="/home/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home</Link>
						<h2>Application <small>Pariatur id exercitation in commodo occaecat anim esse pariatur.</small></h2>
						<i className="fa fa-dashboard bg-fade"></i>

							{jsxpage}

					</div>

				</div>
			</div>

		);
	}
};