import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import UrlForm from '../UrlForm.js';

afterEach(cleanup);

describe('User accesses UrlForm component', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<UrlForm />, div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<UrlForm/>).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it('UrlForm contains UrlAdder component', () => {
        const { getByTestId } = render(<UrlForm />);
        
        const renderedUrlAdder = getByTestId('urlAdder');
        
        expect(renderedUrlAdder).toBeInTheDocument();
    });

    it('UrlForm contains UrlListComponent', () => {
        const { getByTestId } = render(<UrlForm />);

        const renderedUrlList = getByTestId('urlList');

        expect(renderedUrlList).toBeInTheDocument();
    });
    
});

describe('User shortens URL using the UrlForm component', () => {
    
    it('UrlList now contains a UrlListElement component', () => {
        const { getByTestId } = render(<UrlForm />);
        const fullUrlInput = getByTestId('urlAdderFullUrl');
        const shortUrlInput = getByTestId('urlAdderShortUrl');
        const urlAddButton = getByTestId('urlAdderButton');

        const fullUrl = 'http//www.userslongurl.com';
        const shortKey = 'shorturl'

        fireEvent.change(fullUrlInput, {target: {value: fullUrl}});
        fireEvent.change(shortUrlInput, {target: {value: shortKey}});

        const leftClick = {button: 1};
        fireEvent.click(urlAddButton, leftClick);

        const renderedUrlListElement = getByTestId('urlListElement');
        
        expect(renderedUrlListElement).toBeInTheDocument();
    });

    it('UrlListElement contains the Full/Short URL pair', () => {
        const { getByTestId } = render(<UrlForm />);
        const fullUrlInput = getByTestId('urlAdderFullUrl');
        const shortUrlInput = getByTestId('urlAdderShortUrl');
        const urlAddButton = getByTestId('urlAdderButton');

        const fullUrl = 'http//www.userslongurl.com';
        const shortKey = 'shorturl'
        const shortUrl = 'http//www.urlshortener.com/' + shortKey;

        fireEvent.change(fullUrlInput, {target: {value: fullUrl}});
        fireEvent.change(shortUrlInput, {target: {value: shortKey}});

        const leftClick = {button: 1};
        fireEvent.click(urlAddButton, leftClick);
        const fullUrlListElement = getByTestId('urlListElementFull');
        const shortUrlListElement = getByTestId('urlListElementShort');

        expect(fullUrlListElement).toHaveTextContent(fullUrl);
        expect(shortUrlListElement).toHaveTextContent(shortUrl);
    });

});