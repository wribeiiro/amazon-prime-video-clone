import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./styles/global"
import Home from './pages/Home';

ReactDOM.render(
	<React.StrictMode>
		<Fragment>
			<GlobalStyle />
			<Home />
		</Fragment>
	</React.StrictMode>,
	document.getElementById('root')
);