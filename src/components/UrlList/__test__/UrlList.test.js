import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import UrlList from '../UrlList.js';

afterEach(cleanup);

describe('UrlList initially', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
            
        ReactDOM.render(<UrlList urlPairList={[]} />, div);
            
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<UrlList urlPairList={[]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('does not contain a UrlListElement component', () => {
        const { queryByTestId } = render(<UrlList urlPairList={[]} />);

        const renderedUrlListElement = queryByTestId('urlListElement');

        expect(renderedUrlListElement).toBe(null);

    });
    
});

describe('Once the UrlList is passed a list of short/full URL pairs', () => {

    it('contains the correct number of UrlListElements', () => {
        const fullUrl = 'http//www.userslongurl.com';
        const shortKey = 'shorturl'
        const shortUrl = 'http//www.urlshortener.com/' + shortKey;
        const urlPair = {
            shortUrl: shortUrl,
            fullUrl: fullUrl
        };
        const urlPairList = [urlPair, urlPair, urlPair];

        const { getAllByTestId } = render(<UrlList urlPairList={urlPairList}/>);
        
        const renderedUrlListElements = getAllByTestId('urlListElement');

        expect(renderedUrlListElements.length).toBe(urlPairList.length);

    });
})

