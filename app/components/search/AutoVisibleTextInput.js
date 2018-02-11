import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class AutoVisibleTextInput extends Component {
  componentDidMount() {
    this._textInput.focus();
  }

  render() {
    return (
      <TextInput {...this.props} ref={component => {this._textInput = component}}/>
    )
  }
};
