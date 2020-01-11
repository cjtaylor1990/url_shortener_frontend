import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UrlForm from '../UrlForm.js';

describe('User accesses UrlForm component', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<UrlForm />, div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it('UrlForm contains UrlAdder component', () => {
        const { getByTestId } = render(<UrlForm />);
        
        const renderedUrlAdder = getByTestId('urlAdder');
        
        expect(renderedUrlAdder).toBeInTheDocument();
    });
});
