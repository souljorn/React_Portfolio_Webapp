var React = require('react');
var Link = require('react-router').Link;

var Projects = React.createClass({
    render: function(){
        return(
          
            <div>
                <Link to={"/"}>Home</Link>
                <h2>All about me</h2>
            </div>
        );
    }
});

module.exports = Projects;
