import React from 'react';
import CheckButton from '../CheckButton';
import EditableLabel from '../EditableLabel';

const style = {
	div: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10px'
	},

	label: {
		lineHeight: '40px',
		width: '50%'
	}
};

export default ({ id, name, completed, handleCheck, handleDelete }) => (
	<div className="todo" style={ style.div }>
		<CheckButton
			check={ completed }
			handleCheck={ () => handleCheck(id) }
		/>

		<EditableLabel value={ name } style={ style.label } />

		<a className="btn-floating red" onClick={ () => handleDelete(id) }>
			<i className="material-icons">&#xE92B;</i>
		</a>
	</div>
);
