import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import {Redirect} from 'react-router-dom';

var SheIsIneffyble = createReactClass({
  render: function() {
    return (
        <Redirect to="/ineffyble" />
    )
  }
});

export default SheIsIneffyble;
