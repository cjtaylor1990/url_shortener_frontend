import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import UrlListElement from '../UrlListElement.js';

afterEach(cleanup);

const fullUrl = 'http//www.userslongurl.com';
const shortKey = 'shorturl'
const shortUrl = 'http//www.urlshortener.com/' + shortKey;
const urlPair = {
    shortUrl: shortUrl,
    fullUrl: fullUrl
};

describe('After being passed a URL pair, the UrlListElement initially', () => {
    it('renders without crashing', () => {

        const div = document.createElement('div');
            
        ReactDOM.render(<UrlListElement urlPair={urlPair} />, div);
            
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<UrlListElement urlPair={urlPair} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the full and short URL pair', () => {
        const { getByTestId } = render(<UrlListElement urlPair={urlPair} />);

        const renderedFullUrl = getByTestId('urlListElementFull');
        const renderedShortUrl = getByTestId('urlListElementShort');

        expect(renderedFullUrl).toHaveTextContent(fullUrl);
        expect(renderedShortUrl).toHaveTextContent(shortUrl);
    });
    
});

