import React, {Component} from 'react';

var Thing = React.createClass({
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
