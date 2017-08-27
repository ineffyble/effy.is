import React, {Component} from 'react';
import { withRouter } from 'react-router'

var EffyRedirect = React.createClass({
  render: function() {
    var redirects = {
        '/tweeting': 'https://twitter.com/ineffyble',
        '/tumbling': 'http://tumbling.effy.is'
    };
    window.location.assign(redirects[this.props.location.pathname]);
  }
});

export default withRouter(EffyRedirect);