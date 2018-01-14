import React, {Component} from 'react';
import { withRouter } from 'react-router'

class EffyRedirect extends Component {
  componentDidMount() {
    var redirects = {
      '/tweeting': 'https://twitter.com/ineffyble',
      '/tumbling': 'http://tumbling.effy.is'
    };
    window.location.assign(redirects[this.props.location.pathname]);
  }

  render() {
    return (
      <h4>...</h4>
    )
  }
}

export default withRouter(EffyRedirect);
