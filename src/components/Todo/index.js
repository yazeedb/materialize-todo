import React from 'react';

const style = {
	div: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px'
	},

	label: {
		lineHeight: '40px'
	}
};

export default ({ id, name, completed, handleCheck, handleDelete }) => (
	<div className="todo" style={ style.div }>
		<a className="btn-floating blue">
			<i className="material-icons">&#xE835;</i>
		</a>

		<label
			className="flow-text"
			style={ style.label }
		>
			{ name }
		</label>

		<a className="btn-floating red">
			<i className="material-icons">&#xE92B;</i>
		</a>
	</div>
);
