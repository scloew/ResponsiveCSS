import React, { Component } from 'react';

export default class Label extends Component {
  render() {
    var labelStyle = {
      fontFamily: "cursive",
      fontWeight: "bold",
      textAlign: "center",
      padding: 6,
      margin: '8%',
      height: '20%',
    };
    return (
      <div style={labelStyle}>{this.props.color}</div>
    );
  }
}