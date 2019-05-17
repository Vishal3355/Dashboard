import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import { withAuthenticator } from './node_modules/aws-amplify-react';
import { Route } from './node_modules/react-router-dom';
import Login from '../Login/Login';
import styles from './styles';
import Dashboard from '../Dashboard/Dashboard';
import ButtonAppBar from '../Reports/Report';
import PageLayout from '../PageLayout/PageLayout';
import { SignIn, ForgotPassword } from './node_modules/aws-amplify-react/dist/Auth';
import HomeDashboard from '../HomeDashBoard/HomeDashboard';


class App extends React.Component {
  render() {
    const { classes } = this.props;
    const datshboard = () => (<Dashboard labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
      data={[{ data: [65, 59, 80, 81, 56, 55, 40] }]} />);


    const devices = () => (<Dashboard labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
      data={[{ data: [100, 159, 180, 181, 156, 155, 140] }]} />);


    
    return (
      <div className={classes.root}>
        <PageLayout />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Route exact path="/" component={datshboard} />
          <Route exact path="/dashboardHome" component={HomeDashboard} />
          <Route exact path="/reports" component={ButtonAppBar} />
          <Route exact path="/devices" component={devices} />
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