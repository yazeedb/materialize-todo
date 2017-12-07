import React from 'react';
import CheckButton from '../CheckButton';

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
		<CheckButton
			check={ completed }
			handleCheck={ () => handleCheck(id) }
		/>

		<label className="flow-text" style={ style.label }>
			{ name }
		</label>

		<a className="btn-floating red" onClick={ handleDelete }>
			<i className="material-icons">&#xE92B;</i>
		</a>
	</div>
);
