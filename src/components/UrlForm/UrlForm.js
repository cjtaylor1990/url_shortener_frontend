import React from 'react';
import './UrlForm.css';

import UrlAdder from '../UrlAdder/UrlAdder.js';
import UrlList from '../UrlList/UrlList.js';

class UrlForm extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			urlPairList: []
		};

		this.addUrlPair = this.addUrlPair.bind(this);
	}

	addUrlPair(shortKey, fullUrl){

		if (shortKey && fullUrl) {
			const shortUrl = 'http//www.urlshortener.com/' + shortKey;
			const newUrlPair = {
				shortUrl: shortUrl,
				fullUrl: fullUrl
			};
			let urlPairList = this.state.urlPairList
			urlPairList.push(newUrlPair);
			this.setState({urlPairList: urlPairList});
		};
	}

	render() {
    	return(
			<div data-testid="urlForm" className="urlForm">
				<UrlAdder addUrlPair={this.addUrlPair} />
				<UrlList urlPairList={this.state.urlPairList} />
			</div>
		);
	};

};

export default UrlForm;
