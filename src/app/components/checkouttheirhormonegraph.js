import React, {Component} from 'react';
import HrtCounter from './hrtcounter.js';
import HormoneGraph from './hormonegraph.js';

class CheckOutTheirHormoneGraph extends Component {
  render() {
    return (
        <div className="row">
            <HrtCounter />
            <HormoneGraph />
        </div>
    )
  }
}

export default CheckOutTheirHormoneGraph;
