import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message, Row, Col, BackTop } from 'antd';
import {BrowserRouter as Router,Route,Link,HashRouter, Redirect, Switch} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';

import Menu from '../components/Menu/NavMenu.jsx'
import Home from '../routes/Home/Home.jsx';
import Detail from '../components/Essay/Detail.jsx';
import About from '../routes/About.jsx';
import Error from '../routes/Exception/403.js';
import styles from './BasicLayout.less'

import NotFound from '../routes/Exception/404'
const { Header, Content, Footer } = Layout;


class BasicLayout extends React.PureComponent {
    state = {
        current: 'mail',
      }
      handleClick = (e) => {
       
        this.setState({
          current: e.key,
        });
      }
    render() {
        return (
            <Layout className="layout">
                <Header className="header" >
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <Menu />
                        </Col>
                    </Row>
                    
                </Header>
                <Content className="container" >
                <BackTop className="back-top" />
                    <Row type="flex" justify="center" >
                        <Col span={16}>
                            <Switch>
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/detail" component={Detail}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/403" component={Error}/>
                                
                                <Redirect exact from="/" to='/home' />
                                <Route exact  component={NotFound} />
                            </Switch>
                        </Col>
                    </Row>
                    
                   
                </Content>
                <Footer className="footer" >Copyright © 2018 Zero. 浙ICP备17022701号-2</Footer>
            </Layout>
        );
    }
}

export default BasicLayout;
