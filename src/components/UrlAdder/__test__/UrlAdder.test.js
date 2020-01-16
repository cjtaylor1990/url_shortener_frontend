import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import UrlAdder from '../UrlAdder.js';

afterEach(cleanup);

describe('The UrlAdder initially', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<UrlAdder />, div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<UrlAdder />).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it('to have a a pair of input boxes', () => {
        const { getByTestId } = render(<UrlAdder />);
        
        const renderedFullUrlInput = getByTestId('urlAdderFullUrl');
        const renderedShortUrlInput = getByTestId('urlAdderShortUrl');

        expect(renderedFullUrlInput).toBeInTheDocument();
        expect(renderedShortUrlInput).toBeInTheDocument();
    });

    it('the pair of input boxes are empty', () => {
        const { getByTestId } = render(<UrlAdder />);
        
        const renderedFullUrlInput = getByTestId('urlAdderFullUrl');
        const renderedShortUrlInput = getByTestId('urlAdderShortUrl');

        expect(renderedFullUrlInput).toHaveTextContent('');
        expect(renderedShortUrlInput).toHaveTextContent('');
    });
});