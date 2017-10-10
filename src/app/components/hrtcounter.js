import React, {Component} from 'react';
import createReactClass from 'create-react-class';

var HrtCounter = createReactClass({
  dayCount: function() {
      var now = new Date();
      var startDate = new Date('2015-11-23');
      return Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));      
  },
  render: function() {
    return (
        <h1>Effy has been on HRT for {this.dayCount()} days.</h1>
    )
  }
});

export default HrtCounter;