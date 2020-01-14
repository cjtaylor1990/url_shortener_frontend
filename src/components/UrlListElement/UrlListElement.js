import React from 'react';
import './UrlList.css';

class UrlList extends React.Component {

	render() {
    	return(
			<div data-testid="urlListElement" className="urlListElement">
				<div data-testid="urlListElementFull" className="fullUrl">{this.props.urlPair.fullUrl}</div>
				<div data-testid="urlLIstElementShort" className="shortUrl">{this.props.urlPair.shortUrl}</div>
			</div>
		);
	};

};

export default UrlList;
