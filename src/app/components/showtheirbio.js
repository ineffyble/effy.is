import React, {Component} from 'react';
import Router from 'react-router';
import EffyPhoto from './effyphoto.js';
import EffyBio from './effybio.js';

class ShowTheirBio extends Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="/styles/candidate.css" />
        <div className="row" id="body">
          <EffyPhoto />
          <EffyBio />
        </div>
      </div>
    )
  }
}

export default ShowTheirBio;
