import React,{Component} from "react"
import { Link } from "react-router-dom"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';
import { dateFormat } from '../../utils/utils'
import style from './Essay.less'
import MyIcon from '../Icon/MyIcon.jsx'


const Essay = (props) => {
    const { essay } = props;
    // console.log( essay ,'2')
    return (
        <Card bordered={false} className="essay"  >
            <div className="essay-container" >
                <h1>{essay.title}</h1>
                <p className="time" ><MyIcon type="icon-test" /> {dateFormat('yyyy年MM月dd日', essay.gmt_created)}</p>
                <h4>{essay.description}</h4>
                <div dangerouslySetInnerHTML={{__html: `${essay.content}`}} />
            </div>
            <span><Link to={`/detail?${essay.id}`} >仔细瞅瞅~</Link></span>
        </Card>
    )
};
export default Essay;
