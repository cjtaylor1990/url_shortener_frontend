import React from 'react';
import './App.css';

import LoginForm from '../LoginForm/LoginForm.js';

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			authenticated: false,
		};

		this.authenticate = this.authenticate.bind(this);
	}

	authenticate(username,password){
		if (username && password) {
			this.setState({authenticated: true});
		};
	}

	render() {
    	if (this.state.authenticated) {
			return (
				<div className="App">
					<h1> Your authenticated! </h1>
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
