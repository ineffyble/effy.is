import React, {Component} from 'react';
import createReactClass from 'create-react-class';

var Thing = createReactClass({
  render: function() {
    return (
      <li>
          <a href={this.props.link} target="_blank">{this.props.name}</a><br />
          <span dangerouslySetInnerHTML={{__html: this.props.description}} />
      </li>
    )
  }
});

export default Thing;
