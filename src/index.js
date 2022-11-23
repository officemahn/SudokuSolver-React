import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as AWS from 'aws-sdk'
// import { ConfigurationOptions } from 'aws-sdk'

// const configuration: ConfigurationOptions = {
//     region: 'YOUR_REGION',
//     secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//     accessKeyId: 'YOUR_ACCESS_KEY_ID'
// }

// AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
