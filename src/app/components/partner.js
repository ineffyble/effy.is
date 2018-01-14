import React, {Component} from 'react';
import { Twemoji } from 'react-emoji-render';
import Morphext from './morphext.js';

class Partner extends Component {
  daysSince(date) {
      var now = new Date();
      var then = new Date(date);
      return Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(then.getFullYear(), then.getMonth(), then.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  formatAnniversary(date) {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var anniversary = new Date(date);
      return anniversary.getDate() + " " + months[anniversary.getMonth()] + " " + anniversary.getFullYear();
  }

  isMultiple(name) {
    return Array.isArray(name);
  }

  renderName(name) {
    if (this.isMultiple(name)) {
      return <Morphext animation="flipInY" speed="3000" phrases={name} />;
    } else {
      return name;
    }
  }

  render() {
    return (
      <div>
          <h1><Twemoji text={this.props.heart}/> {this.renderName(this.props.name)} - {this.formatAnniversary(this.props.anniversary)} - <b>{this.daysSince(this.props.anniversary)} days</b></h1>
      </div>
      )
  }
}

export default Partner;
