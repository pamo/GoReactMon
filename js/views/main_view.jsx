var React = require('react'),
    StationsView = require('./stations_view');


module.exports = React.createClass({
  render: function(){
    return <StationsView stations={this.props.stations}/>;
  }
});
