import React, {Component} from 'react';
import HrtCounter from './hrtcounter.js';
import HormoneGraph from './hormonegraph.js';

var CheckOutHerHormoneGraph = React.createClass({
  render: function() {
    return (
        <div className="row">
            <HrtCounter />
            <HormoneGraph />
        </div>
    )
  }
});

export default CheckOutHerHormoneGraph;