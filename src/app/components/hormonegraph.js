import React, {Component} from 'react';

class HormoneGraph extends Component {
  render() {
    var graphUrl = 'https://docs.google.com/spreadsheets/d/18GBjWeH84OuAg-uipmkvBzU_WTJyel9S6Fd4QVh3U_A/pubchart?oid=737800518&format=image';
    return (
        <img src={graphUrl} style={{maxWidth: '100%'}} />
    )
  }
}

export default HormoneGraph;
