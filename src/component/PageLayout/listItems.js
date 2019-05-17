import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import DevicesIcon from  '@material-ui/icons/Devices';
import HighlightIcon from '@material-ui/icons/Highlight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PlaylistplayIcon from '@material-ui/icons/PlaylistPlay';
import { Link } from 'react-router-dom';

const primaryList = {
  Dashboard:
    {
      icon: <DashboardIcon />,
      linkPath: '/',
    },
};

const secondaryList = {
    DashboardHome:
    {
      icon: <DashboardIcon />,
      linkPath: '/dashboardHome',
    },
    Sites:
    {
      icon: <HighlightIcon />,
      linkPath: '/sites',
    },
    Devices:
    {
      icon: <DevicesIcon />,
      linkPath: '/devices',
    }, 
    Users:
    {
      icon: <GroupIcon />,
      linkPath: '/users',
    },
    'Component View':{
      icon: <PlaylistplayIcon />,
      linkPath: '/component',
    },
    'Alarms/Notification':{
      icon: <NotificationsIcon />,
      linkPath: '/alarm',
    },
    'Reports':{
      icon: <AssignmentIcon />,
      linkPath: '/reports',
    }
    
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

function getSecondaryMenu()
{
    const data = Object.keys(secondaryList).map(key => (
    <Link to={secondaryList[key].linkPath}>
    <ListItem button>
      <ListItemIcon>
      {secondaryList[key].icon}
      </ ListItemIcon>
      <ListItemText primary={key} />
    </ListItem>
    </Link>
    ));
    return data;
  }

    export const mainListItems = getMenu();

    export const secondaryListItems = getSecondaryMenu();
    


    

  
