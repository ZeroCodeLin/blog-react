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
            >
                <Menu.Item key="home">
                    <Link to="/Demo" />
                    <Icon type="home" />首页
                </Menu.Item>
                <Menu.Item key="code">
                    <Link to="/" />
                    <Icon type="code" />Code
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Icon type="file-text" />随笔
                </Menu.Item>
                <Menu.Item key="me">
                    <Icon type="info-circle-o" />关于我
                </Menu.Item>
            </Menu>
        );
    }
}

export default BasicLayout;
