import React, {Component} from 'react';

class Thing extends Component {
  render() {
    return (
      <li>
          {this.props.link ? <a href={this.props.link} target="_blank">{this.props.name}</a> : <b>{this.props.name}</b>}<br />
          <span dangerouslySetInnerHTML={{__html: this.props.description}} />
      </li>
    )
  }
}

export default Thing;
