import React, {Component} from 'react';
import EffyHeader from './effyheader.js';

class EffyLayout extends Component {
  render() {
    return (
        <div>
            <EffyHeader />
            {this.props.children}
        </div>
    )
  }
}

export default EffyLayout;
