import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message, Row, Col } from 'antd';
import {BrowserRouter as Router,Route,Link,HashRouter} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';

import Menu from '../components/Menu/NavMenu.jsx'
import Demo from '../routes/Hello.jsx'
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
                <Header style={{ background: '#fff' }} >
                    <Row >
                        <Col span={12} offset={3}>
                            <Menu />
                        </Col>
                    </Row>
                    
                </Header>
                <Content>
                    <Route exact path="/Demo" component={Demo}/>
                    <QueueAnim leaveReverse={true} >
                        
                        
                        <div key="demo1">依次进场</div>
                        <div key="demo2">依次进场</div>
                        <div key="demo3">依次进场</div>
                        <div key="demo4">依次进场</div>
                    </QueueAnim>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default BasicLayout;
