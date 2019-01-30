import React, { Component } from 'react';
import Nav01 from '../../components/Nav01/src';
import Banner01 from '../../components/Banner01/src';
import List01 from '../../components/List01/src';
import Footer01 from '../../components/Footer01/src';
import "./index.css";

export default class Custom extends Component {


  
  render() {
    const links = [
    ];
    const styles = {
      custom: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        
      },
      mt10:{
        marginTop:"10px"
      }
    };
    
    return (
      <div className="custom">
        <Nav01></Nav01>
        <Banner01 style={styles.mt10}></Banner01>
        <List01></List01>
        <Footer01></Footer01>
      </div>
      // <Greeting
      //   title="欢迎使用自定义模板"
      //   description="相关链接"
      //   links={links}
      // />
    );
  }
}
