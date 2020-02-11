import React, { Component } from 'react';
import Square from './square-component';
import Label from './label-component';

export default class ColorCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text,
      color: this.props.color,
      colorPlaceholder: '',
      textPlaceholder: ''
    }

    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      textPlaceholder: e.target.value
    })
  }

  onChangeColor(e) {
    this.setState({
      colorPlaceholder: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const newColor = this.state.colorPlaceholder ? this.state.colorPlaceholder : this.state.color;
    const newText = this.state.textPlaceholder ? this.state.textPlaceholder : this.state.text;
    this.setState({
      text: newText,
      color: newColor,
      textPlaceholder: '',
      colorPlaceholder: ''
    })

    this.state.colorPlaceholder && !this.state.textPlaceholder ? this._colorInput.focus() : this._textInput.focus();
    this._textInput.value = '';
    this._colorInput.value = '';

    e.preventDefault();
  }

  render() {
    var colorCardStyle = {
      height: 170,
      width: 145,
      padding: 20,
      backgroundColor: 'black',
      boxShadow: '0px 0px 5px #666',
      display: 'inline-block',
      textAlign: "center",
      color: 'white',
      fontSize: 'medium'
    }

    return ( //would this work better if I used form from reactive ui?
      <div style={colorCardStyle}>
        <Square color={this.state.color} text={this.state.text} />
        <Label color={this.state.color} />
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label style={{ color: 'black' }}>Edit Text and Color: </label>
              <input type="text"
                className="form-control"
                value={this.state.textPlaceholder}
                placeholder={this.state.text}
                onChange={this.onChangeText}
                ref={
                  el => {
                    this._textInput = el;
                  }
                }
              />
              <input type="text"
                className="form-control"
                value={this.state.colorPlaceholder}
                placeholder={this.state.color}
                onChange={this.onChangeColor}
                ref={
                  el => {
                    this._colorInput = el;
                  }
                }
              />
            </div>
            <div className="form-group">
              <input type="submit" value="change text/color" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div >
    )
  }
}