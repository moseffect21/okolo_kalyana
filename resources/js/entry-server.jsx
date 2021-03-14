/* global context, dispatch */

import App from './App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { HeadProvider } from 'react-head'
import { StaticRouter } from 'react-router-dom';

// Compile an initial state
const { packages } = context;

const headTags = [];

const html = ReactDOMServer.renderToString(
    <div id="app">
        <HeadProvider headTags={headTags}>
            <StaticRouter location={context.url}>
                <App packages={packages} />
            </StaticRouter>
        </HeadProvider>
    </div>
);

const Head = ReactDOMServer.renderToString(headTags)

// dispatch(html);
dispatch(
    `
    <head>
      ${Head}
    </head>
    <body>
      <div id="root">${html}</div>
    </body>`
)