import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import EffyHeader from './effyheader.js';

var EffyLayout = createReactClass({
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
