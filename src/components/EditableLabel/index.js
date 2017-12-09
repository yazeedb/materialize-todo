import React, { Component } from 'react';
import { propEq, when } from 'ramda';

const doIfEnter = when(propEq('key', 'Enter'));
const toggleEditing = (state) => ({
	editing: !state.editing
});

export default class EditableLabel extends Component {
	constructor(props) {
		super(props);

		this.toggleEditing = this.toggleEditing.bind(this);
		this.updateLabel = this.updateLabel.bind(this);

		this.state = {
			editing: false
		};
	}

	toggleEditing() {
		this.setState(toggleEditing);
	}

	updateLabel({ target: { value }}) {
		const { handleUpdate } = this.props;

		handleUpdate(value);
		this.toggleEditing();
	}

	render() {
		const { editing } = this.state;
		const { children, ...other } = this.props;

		console.log('EditableLabel props:', this.props);

		if (editing) {
			return (
				<input
					autoFocus
					type="text"
					defaultValue={ children }
					onKeyUp={ doIfEnter(this.updateLabel) }
					{ ...other }
				/>
			);
		}

		return (
			<label onClick={ this.toggleEditing } { ...other }>
				{ children }
			</label>
		);
	}
}
