import React, {Component} from 'react';

class Thing extends Component {
  render() {
    return (
      <li>
          <a href={this.props.link} target="_blank">{this.props.name}</a><br />
          <span dangerouslySetInnerHTML={{__html: this.props.description}} />
      </li>
    )
  }
}

export default Thing;
