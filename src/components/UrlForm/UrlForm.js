import React from 'react';
import './UrlForm.css';

import UrlAdder from '../UrlAdder/UrlAdder.js';
import UrlList from '../UrlList/UrlList.js';

class UrlForm extends React.Component {

	render() {
    	return(
			<div data-testid="urlForm" className="urlForm">
				<UrlAdder />
				<UrlList />
			</div>
		);
	};

};

export default UrlForm;
