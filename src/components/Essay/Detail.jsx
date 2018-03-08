import React,{Component} from "react"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';
import { dateFormat } from '../../utils/utils'
import style from './Essay.less'
import MyIcon from '../Icon/MyIcon.jsx'
import { essayDetail } from '../../services/api'

const essay = {
    title: '我是tiltle',
    description: '啦啦啦啦'
}

export default class Detail extends React.PureComponent {
    state={
        data:{}
    }

    componentDidMount(){
        console.log(this.props)
        const { location } = this.props;
        essayDetail({id:1}).then(data => {
            console.log(data,'detail')
            this.setState({
                data: data.data
            })
        })
    }

    render(){
        const essay = this.state.data;
        const { title, gmt_created, description, content } = essay
        
        return (
            <Card bordered={false} className="essay"  >
                <div className="essay-container" >
                    <h1>{title}</h1>
                    <p className="time" ><MyIcon type="icon-test" /> {dateFormat('yyyy年MM月dd日', gmt_created)}</p>
                    <h4>{description}</h4>
                    <div dangerouslySetInnerHTML={{__html: `${content}`}} />
                </div>
                <a onClick={()=>this.props.history.goBack()} >返回~</a>
            </Card>
        )
    }
};
