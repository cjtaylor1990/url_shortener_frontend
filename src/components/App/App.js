import React from 'react';
import './App.css';

import LoginForm from '../LoginForm/LoginForm.js';
import ShortenerForm from '../ShortenerForm/ShortenerForm.js';

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
					<ShortenerForm />
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
