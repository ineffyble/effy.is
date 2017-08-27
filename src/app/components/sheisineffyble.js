import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

var SheIsIneffyble = React.createClass({
  render: function() {
    return (
        <Redirect to="/ineffyble" />
    )
  }
});

export default SheIsIneffyble;
