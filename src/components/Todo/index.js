import React from 'react';

export default ({ id, name, completed }) => (
	<div className="todo">
		{ id }
		{ name }
		{ completed }
	</div>
);
