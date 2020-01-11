import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: undefined,
			password: undefined
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	};

	handleUsernameChange(event) {
		this.setState({username: event.target.value});
	};

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	};

	handleLogin(event) {
		this.props.authenticate(this.state.username, this.state.password);
		event.preventDefault();
	};

	render() {
    	return(
			<div data-testid="loginForm" className="loginForm">
				<input data-testid="loginFormUsername" type="text" className="username" placeholder="Username" onChange={this.handleUsernameChange}/>
				<input data-testid="loginFormPassword" type="password" className="password" placeholder="Password" onChange={this.handlePasswordChange}/>
				<button data-testid="loginFormLogin" type="submit" className="login" onClick={this.handleLogin}> Log In </button>
			</div>
		);
	};

};

export default LoginForm;
