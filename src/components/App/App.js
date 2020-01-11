import React from 'react';
import './App.css';

import LoginForm from '../LoginForm/LoginForm.js';
import UrlForm from '../UrlForm/UrlForm.js';

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			authenticated: false,
			username: undefined,
			password: undefined
		};

		this.authenticate = this.authenticate.bind(this);
	}

	authenticate(username,password){
		if (username && password) {
			this.setState({
				authenticated: true,
				username: username,
				password: password
			});
		};
	}

	render() {
    	if (this.state.authenticated) {
			return (
				<div className="App">
					<UrlForm />
				</div>
      	);
    	} else {
      		return (
        		<div className="App">
					<LoginForm authenticate={this.authenticate} />
				</div>
      		);
    	};
	};

}

export default App
