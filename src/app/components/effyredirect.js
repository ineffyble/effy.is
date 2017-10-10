import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import { withRouter } from 'react-router'

var EffyRedirect = createReactClass({
  componentDidMount: function() {
    var redirects = {
      '/tweeting': 'https://twitter.com/ineffyble',
      '/tumbling': 'http://tumbling.effy.is'
    };
    window.location.assign(redirects[this.props.location.pathname]);    
  },
  render: function() {
    return (
      <h4>...</h4>
    )
  }
});

export default withRouter(EffyRedirect);