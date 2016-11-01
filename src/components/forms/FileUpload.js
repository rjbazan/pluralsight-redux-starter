import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
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
    return (
      <div className={className}>
        <input className={'mdl-uploadfield__input'} ref={'browse'} {...input} {...props} />
        <label className={'mdl-uploadfield__label'}>{label}</label>
        {touched && error && <span className="mdl-uploadfield__error">{error}</span>}
      </div>
    );
  }

}