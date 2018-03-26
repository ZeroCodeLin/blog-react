import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message, Row, Col, BackTop, Card, Affix, Avatar, Divider } from 'antd';
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
                    <Row type="flex" justify="center" gutter={16} >
                        <Col span={14}>
                            <Switch>
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/detail" component={Detail}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/403" component={Error}/>
                                
                                <Redirect exact from="/" to='/home' />
                                <Route exact  component={NotFound} />
                            </Switch>
                        </Col>
                        <Col span={4}>
                            <Affix>
                                <Card className="essay"
                                    //  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <div className="blog-info">
                                        <Avatar shape="circle" style={{width:80,height:80,borderRadius:40}} src="http://ot21i8iqs.bkt.clouddn.com/25998672.png" />
                                        <span className="name" >Zero</span>
                                    </div>
                                    <Divider dashed />
                                    <div className="link" >
                                        <a href="https://github.com/l-Lemon" target="_blank"><Avatar icon="github" style={{marginRight:10}} /></a>
                                        <a href="https://segmentfault.com/u/11jin" target="_blank"><Avatar style={{ backgroundColor: '#87d068',marginRight:10 }} >sf</Avatar></a>
                                        
                                        <a href="mailto:540846207@qq.com" ><Avatar icon="mail" style={{marginRight:10}} /></a>
                                        <a href="https://juejin.im/user/5ab0a7576fb9a028d3753b3f" target="_blank" ><Avatar style={{backgroundColor: '#ccc',marginRight:10}} src="https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" /></a>
                                        {/* <Avatar icon="github" style={{marginRight:10}} />
                                        <Avatar icon="github" /> */}
                                    </div>

                                </Card>
                            </Affix>
                        </Col>
                    </Row>
                    
                   
                </Content>
                <Footer className="footer" >Copyright © 2018 Zero. 浙ICP备17022701号-2</Footer>
            </Layout>
        );
    }
}

export default BasicLayout;
