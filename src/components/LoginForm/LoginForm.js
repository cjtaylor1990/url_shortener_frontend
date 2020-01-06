import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
	
	render() {
    	return(
			<div class="loginForm">
				<h1> URL Shortener </h1>
				<input type="text" class="username" placeholder="Username" />
				<input type="password" class="password" placeholder="Password" />
				<button type="submit" class="login"> Log In </button>
			</div>
		);
	};

};

export default LoginForm;
