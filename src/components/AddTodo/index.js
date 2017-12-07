import React, { Component } from 'react';

const style = {
	fontSize: '1.5rem'
};

export default class AddTodo extends Component {
	constructor(props) {
		super(props);

		this.submitTodo = this.submitTodo.bind(this);
		this.updateInputValue = this.updateInputValue.bind(this);

		this.state = {
			value: ''
		};
	}

	submitTodo(e) {
		const { handleSubmit } = this.props;
		const { value } = this.state;

		e.preventDefault();

		if (!value.trim()) {
			return;
		}

		handleSubmit(value.trim());
		this.setState({ value: '' });
	}

	updateInputValue({ target: { value } }) {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;

		return (
			<form onSubmit={ this.submitTodo }>
				<input
					type="text"
					placeholder="Add a todo..."
					style={ style }
					value={ value }
					onChange={ this.updateInputValue }
				/>
			</form>
		);
	}
}
