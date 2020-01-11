import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import LoginForm from './components/LoginForm/LoginForm.js';

test('LoginForm initially has blank username and password', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    
    expect(usernameInput).toHaveTextContent('');
    expect(passwordInput).toHaveTextContent('');
});