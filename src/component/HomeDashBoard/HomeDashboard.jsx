import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import TextField from '@material-ui/core/TextField';



  
function CSSGrid (props){
  const { classes } = props;

  return (
    <div>
      {/* <Typography variant="subtitle1" gutterBottom>
        Material-UI Grid:
      </Typography> */}
      <Grid container spacing={25}>
        <Grid item xs={4}>
        
        
        <TextField
          id="SiteName"
          label="Site Profile Name"
          style={{ margin: 2 }}
          placeholder="Site Name"
          
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      <Divider className={classes.divider} />  
        <TextField
          id="ACRate"
          label="AC Rating"
          style={{ margin: 2 }}
          placeholder="Rating in kWac"
          width= '60%'
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
<Divider className={classes.divider} />
      <TextField
          id="Invrtr"
          label="Inverter"
          style={{ margin: 2 }}
          placeholder="Inverter Name"
          
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        </Grid>
        <Grid item xs={4}>
        
        <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        
      </Grid>
      <Divider className={classes.divider} />
      {/* <Typography variant="subtitle1" gutterBottom>
        CSS Grid Layout:
      </Typography> */}
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
        
       
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
        
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div>
      <Divider className={classes.divider} />
    </div>

  );
}

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);