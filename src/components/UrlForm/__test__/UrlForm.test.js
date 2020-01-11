import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
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
});
