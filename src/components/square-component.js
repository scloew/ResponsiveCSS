import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    var squareStyle = {
      height: '75%',
      backgroundColor: this.props.color,
      textAlign: 'center',
      fontFamily: "monospace",
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold'
    };
    return (
      <div style={squareStyle}>
        <p style={{ paddingTop: '35%' }}>{this.props.text}</p>
      </div>
    );
  }
}