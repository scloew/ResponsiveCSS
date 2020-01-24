import React, { Component } from 'react';

export default class Square extends Component {
  render() {

    const IsColorDark = hexcolor => {
      hexcolor = hexcolor.replace("#", "");
      var r = parseInt(hexcolor.substr(0, 2), 16);
      var g = parseInt(hexcolor.substr(2, 2), 16);
      var b = parseInt(hexcolor.substr(4, 2), 16);
      return 128 <= (((r * 299) + (g * 587) + (b * 114)) / 1000);
    } //CREDIT for function to: https://24ways.org/2010/calculating-color-contrast

    var squareStyle = {
      height: '75%',
      backgroundColor: this.props.color,
      textAlign: 'center',
      fontFamily: "monospace",
      fontSize: 15,
      color: IsColorDark(this.props.color) ? 'black' : 'white',
      fontWeight: 'bold'
    };
    return (
      <div style={squareStyle}>
        <p style={{ paddingTop: '35%' }}>{this.props.text}</p>
      </div>
    );
  }
}