import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import HrtCounter from './hrtcounter.js';
import HormoneGraph from './hormonegraph.js';

var CheckOutHerHormoneGraph = createReactClass({
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