import React, { Component, PropTypes } from 'react';
class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'Heba is testing Modules here',
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
        <pre>{this.props}</pre>
      </div>
    );
  }
}

export default RandomTest;
