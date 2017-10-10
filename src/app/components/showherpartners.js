import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import Router from 'react-router';
import Partner from './partner.js';

var ShowHerPartners = createReactClass({
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
