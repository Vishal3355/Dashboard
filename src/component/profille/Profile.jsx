import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Auth } from 'aws-amplify'
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
