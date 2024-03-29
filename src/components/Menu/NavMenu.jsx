import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu, Row, Col } from 'antd';
import {BrowserRouter as Router,Route,Link,HashRouter} from 'react-router-dom'

import styles from './NavMenu.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class BasicLayout extends React.PureComponent {
    state = {
        current: 'mail',
      }
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                mode="horizontal"
                className="nav"
                defaultSelectedKeys={['home']}
            >
                <Menu.Item key="home">
                    <Link to="/home" />
                    <Icon type="home" />首页
                </Menu.Item>
                <Menu.Item key="code" disabled >
                    <Link to="/code" />
                    <Icon type="code" />Code
                </Menu.Item>
                <Menu.Item key="alipay" disabled > 
                    <Icon type="file-text" />随笔
                </Menu.Item>
                <Menu.Item key="about" disabled >
                    <Link to="/about" />                
                    <Icon type="info-circle-o" />关于我
                </Menu.Item>
            </Menu>
        );
    }
}

export default BasicLayout;
