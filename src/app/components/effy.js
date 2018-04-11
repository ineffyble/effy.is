import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import EffyRedirect from './effyredirect.js';

class Effy extends Component {
  render() {
    var is = this.props.is.replace(/ /g, '/');
    var is = "/" + is;
    var so = this.props.so;
    if (this.props.soRedirectTo) {
      return (
        <Route path={is} component={EffyRedirect} />
      )
    } else {
      if (this.props.is == 'effy') {
        return (
          <div>
            <Route exact path="/" component={so} />
            <Route path={is} component={so} />
          </div>
        )
      } else {
        return (
          <Route path={is} component={so} />
        )
      }
    }
  }
}

export default Effy;
