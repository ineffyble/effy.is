import React, {Component} from 'react';
import Router from 'react-router';
import EffyHeader from './effyheader.js';
import Things from './things.js';
import CutiesOnline from './cutiesonline.js';

class ShowEffyThings extends Component {
  render() {
    const things = require('../../www/data/effythings.json');
    return (
      <div>
        <div className="row" id="body">
          <Things title="Code things" half={true}>
            <Things subtitle="Things I contribute to" things={things.code.contribute} />
            <Things subtitle="Things I made" things={things.code.made} />
          </Things>
          <Things title="Effy things" half={true}>
            <Things subtitle="Online things" things={things.effy.online} />
            <Things subtitle="Things I care about" things={things.effy.care} />
          </Things>
        </div>
        <Things title="Other cool things">
          <CutiesOnline />
        </Things>
      </div>
    )
  }
}

export default ShowEffyThings;
