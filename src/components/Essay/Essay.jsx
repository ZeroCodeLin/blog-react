import React,{Component} from "react"
import { Link } from "react-router-dom"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';
import { dateFormat } from '../../utils/utils'
import style from './Essay.less'
import MyIcon from '../Icon/MyIcon.jsx'


const Essay = (props) => {
    const { essay } = props;

    return (
        <Card bordered={false} className="essay"  >
            <div className="essay-container" >
                <h1>{essay.title}</h1>
                <p className="time" ><MyIcon type="icon-test" /> {dateFormat('yyyy年MM月dd日', essay.gmt_created)}</p>
                <h4>{essay.description}</h4>
                <p>随便写写，我也不知道写什么啊。到底要写些什么呢？谁能告诉我啊。winner winner， chicken dinner！</p>
            </div>
            <span><Link to="/detail" >仔细瞅瞅~</Link></span>
        </Card>
    )
};
export default Essay;
