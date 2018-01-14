import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
	<nav>
		<h1>{ text }</h1>
	</nav>
);

Header.propTypes = {
	text: PropTypes.string
};

export default Header;
