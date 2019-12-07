import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			authenticated: true,
		};
	}

	async setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state,resolve)
		});
	}

	async authenticate(username,password){
		if (username && password) {
			//let forecasts = await getWeather.fetchWeather(place);
			//await this.setStateAsync({forecasts:forecasts});
		}
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
				  <h1> Your NOT authenticated! </h1>
			  </div>
      );
    };
	};

}

export default App
