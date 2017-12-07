import React, { Component } from 'react';

export default class EditableLabel extends Component {
	render() {
		const { value, ...other } = this.props;

		return (
			<label className="flow-text" { ...other }>
				{ value }
			</label>
		);
	}
}
