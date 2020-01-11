import React from 'react'
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import App from '../App.js';

afterEach(cleanup);

describe('User initially accesses App', () => {
    
    it('renders App without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<App />, div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('App has displays a LoginForm', () => {
        const { getByTestId } = render(<App/>);
        
        const renderedLoginForm = getByTestId('loginForm');
        
        expect(renderedLoginForm).toBeInTheDocument();
    });

});

describe('User submits username and password', () => {

    it('Username and password are recognized. App renders UrlForm', () => {
        const { getByTestId } = render(<App />);
    
        const usernameInput = getByTestId('loginFormUsername');
        const passwordInput = getByTestId('loginFormPassword');
        const loginButton = getByTestId('loginFormLogin');

        const username = 'user1234';
        const password = 'password1';
        fireEvent.change(usernameInput, {target: {value: username}});
        fireEvent.change(passwordInput, {target: {value: password}});

        const leftClick = {button: 1};
        fireEvent.click(loginButton, leftClick);

        const renderedUrlForm = getByTestId('urlForm');
        expect(renderedUrlForm).toBeInTheDocument();

    });

});


