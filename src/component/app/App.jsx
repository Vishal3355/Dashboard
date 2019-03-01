import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withAuthenticator } from 'aws-amplify-react';
import { Route } from 'react-router-dom';
import Login from '../login/Login';
import styles from './styles';
import Dashboard from '../dashboard/Dashboard';
import PageLayout from '../page-layout/PageLayout';
import { SignIn, ForgotPassword } from 'aws-amplify-react/dist/Auth';
class App extends React.Component {
  render() {
    const { classes } = this.props;
    const datshboard = () => (<Dashboard labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
      data={[{ data: [65, 59, 80, 81, 56, 55, 40] }]} />);

    return (
      <div className={classes.root}>
        <PageLayout />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Route exact path="/" component={datshboard} />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withAuthenticator(withStyles(styles)(App), {
  // Render a sign out button once logged in
  includeGreetings: false,
  // Show only certain components
  authenticatorComponents: [
    <SignIn />,
    <ForgotPassword />
  ]
});