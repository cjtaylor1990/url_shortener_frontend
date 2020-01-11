import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginForm from '../LoginForm.js';

describe('LoginForm initially', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
            
        ReactDOM.render(<LoginForm />, div);
            
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has blank input for username and password', () => {
        const { getByTestId } = render(<LoginForm />);

        const usernameInput = getByTestId('loginFormUsername');
        const passwordInput = getByTestId('loginFormPassword');

        expect(usernameInput).toHaveTextContent('');
        expect(passwordInput).toHaveTextContent('');

    });
});