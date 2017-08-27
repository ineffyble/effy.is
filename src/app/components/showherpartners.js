import React, {Component} from 'react';
import Router from 'react-router';
import Partner from './partner.js';

var ShowHerPartners = React.createClass({
  partners: require('../../www/data/partners.json'),
  render: function() {
    return (
      <div>
        {this.partners.filter(function(partner) { return partner.current }).map(function(partner, i) {
          return <Partner name={partner.name} anniversary={partner.anniversary} heart={partner.heart} />
        })}
      </div>
    )
  }
});

export default ShowHerPartners;
