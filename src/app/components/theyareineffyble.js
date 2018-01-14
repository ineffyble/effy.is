import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class TheyAreIneffyble extends Component {
  render() {
    return (
        <Redirect to="/ineffyble" />
    )
  }
}

export default TheyAreIneffyble;
