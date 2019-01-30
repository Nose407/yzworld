import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css";

export default class YzworldList01 extends Component {
  static displayName = 'YzworldList01';

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
      <div className="list01">
        <ul>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic01.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic02.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic03.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic01.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic02.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic03.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic01.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic02.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>
          <li>
            <div className="probox">
              <div className="imgbox"><img src={require('./images/pic03.jpg')} width="100%" alt=""/></div>
              <div className="txtbox">
                <h3>这里是标题</h3>
                <div className="introbox mt5">这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    );
  }
}

const styles = {

}
