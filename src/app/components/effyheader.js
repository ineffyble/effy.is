import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

class EffyHeader extends Component {
  render() {
    return (
        <div className="row" id="title">
            <h1 id="name">Effy Elden</h1>
            <h4 id="identity"><Link to="/">~ is{this.props.location.pathname.replace(/\//g, ' ')} ~</Link></h4>
        </div>
    )
  }
}

export default withRouter(EffyHeader);
