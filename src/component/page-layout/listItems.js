import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

const primaryList = {
  Dashboard:
    {
      icon: <DashboardIcon />,
      linkPath: '/',
    },
};

const getMenu = () => {
  const data = Object.keys(primaryList).map(key => (
    <Link to={primaryList[key].linkPath}>
      <ListItem button>
        <ListItemIcon>
          {primaryList[key].icon}
        </ListItemIcon>
        <ListItemText primary={key} />
      </ListItem>
    </Link>
  ));
  return data;
};
export const mainListItems = getMenu();


export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
  </div>
);
