import React,{Component} from "react"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';
import { dateFormat } from '../../utils/utils'
import style from './Essay.less'
import MyIcon from '../Icon/MyIcon.jsx'

const essay = {
    title: '我是tiltle',
    description: '啦啦啦啦'
}

export default class Essay extends React.PureComponent {

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        // const { essay } = this.props;
        
        return (
            <Card bordered={false} className="essay"  >
                <div className="essay-container" >
                    <h1>{essay.title}</h1>
                    <p className="time" ><MyIcon type="icon-test" /> {dateFormat('yyyy年MM月dd日', '2018-03-09')}</p>
                    <h4>{essay.description}</h4>
                    <p>随便写写，我也不知道写什么啊。到底要写些什么呢？谁能告诉我啊。winner winner， chicken dinner！</p>
                </div>
                <a onClick={()=>this.props.history.goBack()} >返回~</a>
            </Card>
        )
    }
};
