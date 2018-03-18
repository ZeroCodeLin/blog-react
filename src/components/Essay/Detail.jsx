import React,{Component} from "react"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';
import { dateFormat, getParam, loadChangyan } from '../../utils/utils'
import style from './Essay.less'
import MyIcon from '../Icon/MyIcon.jsx'
import { essayDetail } from '../../services/api'
import Highlight from 'react-highlight';

const essay = {
    title: '我是tiltle',
    description: '啦啦啦啦'
}

export default class Detail extends React.PureComponent {
    state={
        data:{}
    }

    componentDidMount(){
        const params = {
            id: getParam(this.props.location.search,'id')
        };
        const { location } = this.props;
        essayDetail(params).then(data => {
            console.log(data,'detail')
            this.setState({
                data: data.data
            })
        })
        loadChangyan()
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
                    <Highlight innerHTML={true}>
                        {content}
                    </Highlight>
                </div>
                <a onClick={()=>this.props.history.goBack()} >风紧扯呼～</a>
                <div id="SOHUCS" sid={`${essay.id}`} ></div>

            </Card>
        )
    }
};
