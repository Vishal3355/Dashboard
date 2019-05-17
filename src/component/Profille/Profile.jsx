import React from './node_modules/react';
import AccountCircle from './node_modules/@material-ui/icons/AccountCircle';
import { Auth } from './node_modules/aws-amplify'
class Profile extends React.PureComponent {
    handleToggle = async () => {
        await Auth.signOut();
    };

    render() {
        return (
            <React.Fragment>
                <AccountCircle onClick={this.handleToggle} />
            </React.Fragment>
        );
    }
}

export default Profile;
