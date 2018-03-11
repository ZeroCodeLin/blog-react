import React,{Component} from "react"
import { Link } from "react-router-dom"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';
import { dateFormat } from '../../utils/utils'
import style from './Essay.less'
import MyIcon from '../Icon/MyIcon.jsx'
import Highlight from 'react-highlight';


const Essay = (props) => {
    const { essay } = props;
    
    return (
        <Card bordered={false} className="essay"  >
            <div className="essay-container" >
                <h1>{essay.title}</h1>
                <p className="time" ><MyIcon type="icon-test" /> {dateFormat('yyyy年MM月dd日', essay.gmt_created)}</p>
                <h4>{essay.description}</h4>
                <Highlight innerHTML={true} className="essay-content" >
                    {essay.content}
                </Highlight>
            </div>
            
            <Link className="essay-detail" to={`/detail?id=${essay.id}`} >仔细瞅瞅~</Link>
        </Card>
    )
};
export default Essay;
