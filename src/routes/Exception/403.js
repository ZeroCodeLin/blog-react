import React,{ Component } from 'react'
import { Button } from 'antd'

import style from './error.less'
import img from '../../assets/403.svg'

class ErrorView extends Component{


    render(){

        return (
            <div className="exception-container" >
                <div style={{paddingRight:100}} >
                    <img src={img} />
                </div>
                <div>
                    <h1 className="title" >403</h1>
                    <div className="msg" >抱歉，你无权访问该页面</div>
                    <a href="#/" ><Button type="primary" >返回首页</Button></a>
                </div>
            </div>
        )
    }
}

export default ErrorView;