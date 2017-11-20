var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';

//Module requires
var Home = require('./home');
var Projects = require('./projects');
var About = require('./about');

//CSS requires
require('./css/index.css');
//require('./css/navbar.css');

//SETUP ROUTING
var App = React.createClass({
    render: function(){
        return(

            <Router history={browserHistory}>
                <Route path={"/"} component={Home}></Route>
                <Route path={"/projects"} component={Projects}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return
              (
            <div>
            <p>HELLLO</p>
            <div><Link to={"/home"}>Home</Link></div>
            <div><Link to={"/about"}>About</Link></div>
            </div>
        );
    } //render

});
//ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
