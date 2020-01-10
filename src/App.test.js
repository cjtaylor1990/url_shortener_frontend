import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './components/App/App.js'

test('App initially renders with login screen', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log In');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
});

test('Login screen has blank username and password', () => {
    const { getByPlaceholderText } = render(<App />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    
    expect(usernameInput).toHaveTextContent('');
    expect(passwordInput).toHaveTextContent('');
});

test('User submits username and password and now can access main page', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log In');

    const username = 'user1234';
    const password = 'password1';
    fireEvent.change(usernameInput, {target: {value: username}});
    fireEvent.change(passwordInput, {target: {value: password}});

    const leftClick = {button: 1};
    fireEvent.click(loginButton, leftClick);

    const shortUrlInput = getByPlaceholderText('Shortened URL');
    const fullUrlInput = getByPlaceholderText('Original URL')

    expect(shortUrlInput).toBeTruthy();
    expect(fullUrlInput).toBeTruthy();

});

test('After accessing main page, user adds a URL to his database. Key-value pair added to list.', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    
    const shortUrlInput = getByPlaceholderText('Shortened URL');
    const fullUrlInput = getByPlaceholderText('Original URL');
    const addUrlButton = getByText('Add URL');

    const shortUrl = 'shorturl';
    const fullUrl = 'http://www.longurl.com';

    fireEvent.change(shortUrlInput, {target: {value: shortUrl}});
    fireEvent.change(fullUrlInput, {target: {value: fullUrl}});

    const leftClick = {button: 1};
    fireEvent.click(addUrlButton, leftClick);

    const shortUrlListing = getByText(shortUrl);
    const fullUrlListing = getByText(fullUrl);

    expect(shortUrlListing).toBeTruthy();
    expect(fullUrlListing).toBeTruthy();

});

