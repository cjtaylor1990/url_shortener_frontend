import React from 'react';
import './UrlAdder.css';

class UrlAdder extends React.Component {

	render() {
    	return(
			<div className="urlAdder">
				<input type="text" className="fullUrl" placeholder="Original URL" onChange={this.handlePasswordChange}/>
				<input type="text" className="shortUrl" placeholder="Shortened URL" onChange={this.handleUsernameChange}/>
				<button type="submit" className="addUrl"> Add URL </button>
			</div>
		);
	};

};

export default UrlAdder;
