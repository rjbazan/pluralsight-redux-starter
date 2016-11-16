import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import './fileUpload.css';

export default class UploadField extends Component {

  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onFocus(e) {
    this.props.input.onFocus(e);
    this.focusTimeout = setTimeout(() => {
      this.focusTimeout = null;
      this.setState({ focused: true });
    });
  }

  onBlur(e) {
    this.props.input.onBlur(e);
    this.blurTimeout = setTimeout(() => {
      this.blurTimeout = null;
      this.setState({ focused: false });
    });
  }

  onChange(e) {
    this.textVal = e.target.files[0].name;
    this.props.input.onBlur(e);
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }


  componentWillUnmount() {
    if (this.focusTimeout) clearTimeout(this.focusTimeout);
    if (this.blurTimeout) clearTimeout(this.blurTimeout);
  }

  render() {
    const { browse } = this.refs;
    const { input, label, meta: { pristine, touched, visited, error, dirty } } = this.props;
    const files = browse && browse.files.length;
    const className = classnames({
      'mdl-uploadfield': true,
      'mdl-uploadfield--floating-label': true,
      'is-dirty': dirty,
      'is-focused': this.state.focused,
      'is-invalid': error && (touched || visited) && !files 
    });
    const props = {
      type: 'file',
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      onChange: this.onChange
    };
    const styles = {
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
      },
      inline: {
        display: 'inline-block'
      }
    };
    return (
      <div className={className}>
      <div style={styles.inline}>
        <FlatButton label="Upload Certificate" labelPosition="before">
          <input type="file" style={styles.exampleImageInput} ref={'browse'} {...input} {...props} />
        </FlatButton>
      </div>
        <div style={styles.inline}>
        <TextField value={this.textVal}></TextField>
        </div>
        
      </div>
    );
  }

}