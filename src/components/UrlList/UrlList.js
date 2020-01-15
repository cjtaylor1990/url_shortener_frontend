import React from 'react';
import './UrlList.css';
import UrlListElement from '../UrlListElement/UrlListElement.js';

class UrlList extends React.Component {

	createUrlList() {
		return this.props.urlPairList.map((urlPair, index) => {
			return <UrlListElement key={index} urlPair={urlPair} />
		});
	}

	render() {
    	return(
			<div data-testid="urlList" className="urlList">
				{this.createUrlList()}
			</div>
		);
	};

};

export default UrlList;
