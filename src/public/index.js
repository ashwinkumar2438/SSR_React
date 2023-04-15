import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../app.jsx';
import './styles.css';
import './base.css';

const domNode = document.querySelector( '#root' );

hydrateRoot( domNode, <App /> );