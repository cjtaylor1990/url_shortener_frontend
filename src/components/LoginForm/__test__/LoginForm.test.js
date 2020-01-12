import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import LoginForm from '../LoginForm.js';

afterEach(cleanup);

describe('LoginForm initially', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
            
        ReactDOM.render(<LoginForm />, div);
            
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<LoginForm/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has blank input for username and password', () => {
        const { getByTestId } = render(<LoginForm />);

        const usernameInput = getByTestId('loginFormUsername');
        const passwordInput = getByTestId('loginFormPassword');

        expect(usernameInput).toHaveTextContent('');
        expect(passwordInput).toHaveTextContent('');

    });
    
});