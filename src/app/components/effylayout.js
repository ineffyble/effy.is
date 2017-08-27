import React, {Component} from 'react';
import EffyHeader from './effyheader.js';

var EffyLayout = React.createClass({
  render: function() {
    return (
        <div>
            <EffyHeader />
            {this.props.children}
        </div>
    )
  }
});

export default EffyLayout;
