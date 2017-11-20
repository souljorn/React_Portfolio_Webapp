var React = require('react');
var Link = require('react-router').Link;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBarExampleIcon from './appbar';
import createTypography from 'material-ui/styles/typography';

require('./css/index.css');



var Home = React.createClass({
    render: function(){
        return(
            <div>
                <AppBarExampleIcon />
                <div><Link font-family='IBM Plex Sans' to={"/"}>Home</Link></div>
            </div>
        );
    }
});

module.exports = Home;
