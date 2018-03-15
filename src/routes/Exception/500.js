import react,{Component} from 'react'
import {Button} from 'antd'

import style from './error.less'
import img from '../../assets/500.svg'

class ErrorView extends Component{


    render(){

        return (
            <div className="exception-container" >
                <div style={{paddingRight:100}} >
                    <img src={img} />
                </div>
                <div>
                    <h1 className="title" >500</h1>
                    <div className="msg" >抱歉，服务器出错了</div>
                    <a href="#/" ><Button type="primary" >返回首页</Button></a>
                </div>
            </div>
        )
    }
}

export default ErrorView;