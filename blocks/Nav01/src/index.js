import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class YzworldNav01 extends Component {
  static displayName = 'YzworldNav01';

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
      <div>
        yzworld-nav01
      </div>
    );
  }
}

const styles = {

}
