import React from 'react';
import './UrlAdder.css';

class UrlAdder extends React.Component {

	render() {
    	return(
			<div data-testid="urlAdder" className="urlAdder">
				<input data-testid="urlAdderFullUrl" type="text" className="fullUrl" placeholder="Original URL" onChange={this.handlePasswordChange}/>
				<input data-testid="urlAdderShortUrl" type="text" className="shortUrl" placeholder="Shortened URL" onChange={this.handleUsernameChange}/>
				<button data-testid="urlAdderButton" type="submit" className="addUrl"> Add URL </button>
			</div>
		);
	};

};

export default UrlAdder;
