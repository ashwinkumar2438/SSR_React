import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app.jsx';

const html = ReactDOMServer.renderToString( <App /> );

export default html;