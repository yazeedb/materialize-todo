import React from 'react';

export default ({ check }) => (
	<a className={ `btn-floating ${check ? 'green' : 'transparent'}` }>
		<i className="material-icons">check</i>
	</a>
);
