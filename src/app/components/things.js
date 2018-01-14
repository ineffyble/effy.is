import React, {Component} from 'react';
import Thing from './thing.js';

class Things extends Component {
  children() {
    if (this.props.children) {
      return (<div>{this.props.children}</div>)
    } else {
      return false;
    }
  }

  content() {
    var content;
    if (this.props.half) {
      var className = "one-half column";
    } else {
      var className = "";
    }
    if (this.props.title) {
      content = (
      <div className={className}>
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
      )
    } else {
      if (this.props.children) {
        content = (
          <div>
            <h5>{this.props.subtitle}</h5>
            {this.props.children}
          </div>
        )
      } else {
        content = (
          <div>
            <h5>{this.props.subtitle}</h5>
            <ul className="things">
              {this.props.things.map(function(thing, i) {
                return(<Thing name={thing.name} link={thing.link} description={thing.description} key={i} />)
              })}
            </ul>
          </div>
        )
      }
    }
    return content;
  }

  render() {
    return this.content()
  }
}

export default Things;
