import React, { Component } from 'react';

export default class EditableLabel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false
		};
	}

	toggleEditing() {
		const { editing } = this.state;

		this.setState({ editing: !editing });
	}

	render() {
		const { editing } = this.state;
		const { value, ...other } = this.props;

		if (editing) {
			return <input type="text" defaultValue={ value } { ...other } />;
		}

		return (
			<label className="flow-text" { ...other }>
				{ value }
			</label>
		);
	}
}
