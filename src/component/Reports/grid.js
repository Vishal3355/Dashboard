import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Route } from 'react-router-dom';
import SimpleTabs from '../reports/simpletab'

const styles = theme => ({
  container: {
    
    display: 'grid' | 'inline-grid',
    gridTemplateColumns: '50px 50px',
    gridTemplateRows: 'auto',
    
    //gridTemplateColumns: 'repeat(12, 1fr)',
    //gridGap: `${theme.spacing.unit * 0}px`,
    
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 1}px 0`,
  },
});

function CSSGrid(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={10}>
        
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          
          { <Route exact path="/reports" component={SimpleTabs} /> }
          </Paper>
           
        </Grid>
          
        </Grid>

      <Divider className={classes.divider} />

      
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        
      </Typography>
          
        
        </div>
  );
}

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);
