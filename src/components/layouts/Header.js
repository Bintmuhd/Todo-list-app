import React from 'react';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>ToDo List App</h1>
		</header>
	);
}

const headerStyle = {
	marginTop: '20px',
	color: '#0d1e3d',
	textAlign: 'center',
	padding: '10px',
};

export default Header;
