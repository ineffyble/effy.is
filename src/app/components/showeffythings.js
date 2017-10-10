import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import Router from 'react-router';
import EffyHeader from './effyheader.js';
import Things from './things.js';
import CutiesOnline from './cutiesonline.js';

var ShowEffyThings = createReactClass({
  things: require('../../www/data/effythings.json'),  
  render: function() {
    return (
      <div>
        <div className="row" id="body">
          <Things title="Code things" half={true}>
            <Things subtitle="Things I contribute to" things={this.things.code.contribute} />
            <Things subtitle="Things I made" things={this.things.code.made} />
          </Things>
          <Things title="Effy things" half={true}>
            <Things subtitle="Online things" things={this.things.effy.online} />
            <Things subtitle="Things I care about" things={this.things.effy.care} />
          </Things>
        </div>
        <Things title="Other cool things">
          <CutiesOnline />
        </Things>
      </div>
    )
  }
});

export default ShowEffyThings;
