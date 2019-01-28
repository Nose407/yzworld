import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css";

export default class YzworldBanner01 extends Component {
  static displayName = 'YzworldBanner01';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Banner01">
        <img src={require('./images/screenshot.png')} width="100%" alt=""/>
      </div>
    );
  }
}

const styles = {

}
