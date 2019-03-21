import React from "react";
import Select from 'react-select';
import { fileFormat } from "../data/dropdown-data"


export default class AppPage1 extends React.PureComponent {
  render () {
		return (
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
		)
	}
}