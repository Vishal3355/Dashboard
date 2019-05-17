import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import Avatar from './node_modules/@material-ui/core/Avatar';
import Button from './node_modules/@material-ui/core/Button';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import FormControl from './node_modules/@material-ui/core/FormControl';
import FormControlLabel from './node_modules/@material-ui/core/FormControlLabel';
import Checkbox from './node_modules/@material-ui/core/Checkbox';
import Input from './node_modules/@material-ui/core/Input';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import LockOutlinedIcon from './node_modules/@material-ui/icons/LockOutlined';
import Paper from './node_modules/@material-ui/core/Paper';
import Typography from './node_modules/@material-ui/core/Typography';
import withStyles from './node_modules/@material-ui/core/styles/withStyles';
import styles from './styles';

function Login(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Login);
