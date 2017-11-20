import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

require('./css/index.css');
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

 const Logged = (props) => (
   <IconMenu
     {...props}
     iconButtonElement={
       <IconButton><MoreVertIcon /></IconButton>
     }
     targetOrigin={{horizontal: 'right', vertical: 'top'}}
     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
   >
     <MenuItem primaryText="Home" />
     <MenuItem primaryText="Projects" />
     <MenuItem primaryText="About" />
   </IconMenu>
 );


const AppBarExampleIcon = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <h1>
  <AppBar
    title="Title"
    iconElementRight={<Logged />}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      width: '85%',
      margin: '0 auto',
      backgroundColor: '#e7e8ed',
      fontFamily:'IBM Plex Sans',
      fontsize:'30px',
    }}
  />
  </h1>
  </MuiThemeProvider>
);


export default AppBarExampleIcon;
