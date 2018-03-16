import React, { Component } from 'react';

class EndGame extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.right}/10 Correct answers</h1>
      </div>
    );
  }
}

export default EndGame;