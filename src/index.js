import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './component/app/App';
import config from './awsConfig';

const awsConfig = {
    Auth: {
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
};
console.log(awsConfig);
Amplify.configure(awsConfig);
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
