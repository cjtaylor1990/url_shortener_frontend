import React from 'react';
import './UrlAdder.css';

class UrlAdder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			shortKey: undefined,
			fullUrl: undefined
		};

		this.handleShortKeyChange = this.handleShortKeyChange.bind(this);
		this.handleFullUrlChange = this.handleFullUrlChange.bind(this);
		this.handleAddUrlPair = this.handleAddUrlPair.bind(this);
	};

	handleShortKeyChange(event) {
		this.setState({shortKey: event.target.value});
	};

	handleFullUrlChange(event) {
		this.setState({fullUrl: event.target.value});
	};

	handleAddUrlPair(event) {
		this.props.addUrlPair(this.state.shortKey, this.state.fullUrl);
		event.preventDefault();
	};

	render() {
    	return(
			<div data-testid="urlAdder" className="urlAdder">
				<input data-testid="urlAdderFullUrl" type="text" className="fullUrl" placeholder="Original URL" onChange={this.handleFullUrlChange}/>
				<input data-testid="urlAdderShortUrl" type="text" className="shortUrl" placeholder="Short URL Key" onChange={this.handleShortKeyChange}/>
				<button data-testid="urlAdderButton" type="submit" className="addUrl" onClick={this.handleAddUrlPair}> Add URL </button>
			</div>
		);
	};

};

export default UrlAdder;
