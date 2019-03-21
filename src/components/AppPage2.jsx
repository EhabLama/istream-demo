import React from "react";
import Select from 'react-select';
import { anonType } from "../data/dropdown-data"



export default class AppPage2 extends React.PureComponent {
  render () {
		return (
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
						</form>
		)
	}
}