import React from 'react';
import './UrlForm.css';

import UrlAdder from '../UrlAdder/UrlAdder.js';

class UrlForm extends React.Component {

	render() {
    	return(
			<div data-testid="urlForm" className="urlForm">
				<UrlAdder />
			</div>
		);
	};

};

export default UrlForm;
