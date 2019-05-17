import React from './node_modules/react';
//import PropTypes from 'prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import DatePickers from './datepicker';
import Paper from './node_modules/@material-ui/core/Paper';
//import Divider from '@material-ui/core/Divider';
import Grid from './node_modules/@material-ui/core/Grid';
import { Route } from './node_modules/react-router-dom';
import SimpleTabs from './simpletab';
import Dashboard from '../dashboard/Dashboard';
import AppBar from '@material-ui/core/AppBar';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '70% 30%',
  },
  itemTab:{
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 2,
  },
  itemDatepicker:{
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2
  },
  itemLine:{
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3
  },

});

function CSSGrid(props) {
  const { classes } = props;
  const { alignment, formats } = this.state;


  return (
  <div className={classes.container}>
    <div className={classes.itemTab}>
      
      <ToggleButtonGroup value={alignment} exclusive onChange={this.handleAlignment}>
              <ToggleButton value="left">
                Generation
              </ToggleButton>
              <ToggleButton value="center">
                Performance
              </ToggleButton>
              <ToggleButton value="right">
              
                Earnings
              </ToggleButton>
              <ToggleButton value="justify" disabled>
                <FormatAlignJustifyIcon />
              </ToggleButton>
            </ToggleButtonGroup>
           

     </div>
    {/* <div className={classes.itemDatepicker}>Date Picker</div> */}
    <div className={classes.itemLine}><Dashboard labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
      data={[{ data: [65, 59, 80, 81, 56, 55, 40] }]} /></div>
  </div>
);
}

export default withStyles(styles)(CSSGrid);