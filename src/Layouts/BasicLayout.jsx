import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message, Row, Col, BackTop } from 'antd';
import {BrowserRouter as Router,Route,Link,HashRouter, Redirect} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';

import Menu from '../components/Menu/NavMenu.jsx'
import Home from '../routes/Home/Home.jsx';
import Detail from '../components/Essay/Detail.jsx';
import Demo from '../routes/Hello.jsx';
import styles from './BasicLayout.less'
const { Header, Content, Footer } = Layout;


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
            <Layout>
                <Header className="header" >
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <Menu />
                        </Col>
                    </Row>
                    
                </Header>
                <Content className="container" >
                <BackTop className="back-top" />
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/detail" component={Detail}/>
                            <Route exact path="/Demo" component={Demo}/>
                            <Route path="/" render={() => (<Redirect to="/home"/>)}></Route >
                        </Col>
                    </Row>
                    
                   
                </Content>
                <Footer className="footer" >Copyright © 2017 lemon.</Footer>
            </Layout>
        );
    }
}

export default BasicLayout;
