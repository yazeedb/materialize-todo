import React from 'react';

const makeClassName = (check) => check ? 'green' : 'transparent';

export default ({ check, handleCheck }) => (
	<a
		className={ `btn-floating ${makeClassName(check)}` }
		onClick={ handleCheck }
	>
		<i className="material-icons">check</i>
	</a>
);
