import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head'
import './bootstrap'

// Grab the state from a global variable injected into the server-generated HTML
// const { packages } = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

render(
    <HeadProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HeadProvider>,
    document.getElementById('app')
);