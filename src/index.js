// ext imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// int imports
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App />
		
	</BrowserRouter>,
	document.getElementById('root')
)

