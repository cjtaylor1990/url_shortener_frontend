import React from 'react';
import './ShortenerForm.css';

class ShortenerForm extends React.Component {

	render() {
    	return(
			<div className="shortenerForm">
				<h1> URL Shortener </h1>
				<input type="text" className="fullUrl" placeholder="Original URL" onChange={this.handlePasswordChange}/>
				<input type="text" className="shortUrl" placeholder="Shortened URL" onChange={this.handleUsernameChange}/>
				<button type="submit" className="addUrl"> Add URL </button>
			</div>
		);
	};

};

export default ShortenerForm;
