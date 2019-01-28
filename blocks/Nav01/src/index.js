import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

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
      <div className="Nav01">
        <div className="logobox">
          <img src={require('./images/logo-s2.png')} width="100%" alt=""/>
        </div>
        <div className="navmain">
          <a href="">首页11</a>
          <a href="">产品中心</a>
          <a href="">关于我们</a>
          <a href="">联系方式</a>
        </div>
        <div className="otherbox">
          登录 | 注册
        </div>
      </div>
    );
  }
}

const styles = {

}
