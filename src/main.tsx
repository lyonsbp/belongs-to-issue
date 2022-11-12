import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { ThemeProvider } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>, document.getElementById('root')
)
