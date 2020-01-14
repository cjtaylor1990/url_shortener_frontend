import React from 'react';
import './UrlList.css';

class UrlList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			urlPairs: []
		}
	};

	render() {
    	return(
			<div data-testid="urlList" className="urlList">
			</div>
		);
	};

};

export default UrlList;
