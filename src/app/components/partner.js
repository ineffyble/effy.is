import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import { Twemoji } from 'react-emoji-render';

var Partner = createReactClass({
  daysSince: function(date) {
      var now = new Date();
      var then = new Date(date);
      return Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(then.getFullYear(), then.getMonth(), then.getDate()) ) /(1000 * 60 * 60 * 24));
  },
  formatAnniversary: function(date) {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var anniversary = new Date(date);
      return anniversary.getDate() + " " + months[anniversary.getMonth()] + " " + anniversary.getFullYear();
  },
  render: function() {
    return (
      <div>
          <h1><Twemoji text={this.props.heart}/> {this.props.name} - {this.formatAnniversary(this.props.anniversary)} - <b>{this.daysSince(this.props.anniversary)} days</b></h1>
      </div>
    )
  }
});

export default Partner;
