import React from 'react';

const App = (props) => {
	console.log('Gagan app', props);
	return <>{props.children}</>;
};

export default App;
