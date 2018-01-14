import React, {Component} from 'react';
import { withRouter } from 'react-router'

class EffyHeader extends Component {
  render() {
    return (
        <div className="row" id="title">
            <h1 id="name">Effy Elden</h1>
            <h4 id="identity"><a href="/">~ is{this.props.location.pathname.replace(/\//g, ' ')} ~</a></h4>
        </div>
    )
  }
}

export default withRouter(EffyHeader);
