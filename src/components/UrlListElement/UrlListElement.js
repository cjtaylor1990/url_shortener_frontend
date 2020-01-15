import React from 'react';
import './UrlListElement.css';

class UrlListElement extends React.Component {

	render() {
    	return(
			<div data-testid="urlListElement" className="urlListElement">
				<div data-testid="urlListElementFull" className="fullUrl">{this.props.urlPair.fullUrl}</div>
				<div data-testid="urlListElementShort" className="shortUrl">{this.props.urlPair.shortUrl}</div>
			</div>
		);
	};

};

export default UrlListElement;
