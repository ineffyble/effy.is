import React, {Component} from 'react';
import Router from 'react-router';
import Partner from './partner.js';

class ShowTheirPartners extends Component {
  render() {
    const partners = require('../../www/data/partners.json');
    return (
      <div>
        {partners.filter(function(partner) { return partner.current }).map(function(partner, i) {
          return <Partner name={partner.name} anniversary={partner.anniversary} heart={partner.heart} key={partner.name} />
        })}
      </div>
    )
  }
}

export default ShowTheirPartners;
