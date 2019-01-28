import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css";

export default class YzworldFooter01 extends Component {
  static displayName = 'YzworldFooter01';

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
      <div className="Footer01">
        <div className="flex_lf">
          <img src={require('./images/ewm01.png')} width="100%" alt=""/>
        </div>
        <div className="flex_rf">
          <div className="title">这里是网站的名字</div>
          <div>
            <p>地址：成都市高新区1005号</p>
            <p>电话：12312312313</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {

}
